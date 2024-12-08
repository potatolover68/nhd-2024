const fs = require('fs');
const path = require('path');

// Read the markdown file
const bibPath = path.join(__dirname, '..', '2024-2025 NHD Annotated Bibliography.md');

console.log('Looking for file at:', bibPath);
console.log('File exists:', fs.existsSync(bibPath));

const outputPath = path.join(__dirname, '..', 'src', 'data', 'bibliography.json');

// Create data directory if it doesn't exist
const dataDir = path.join(__dirname, '..', 'src', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

try {
  // Read and parse the markdown file
  let markdown = fs.readFileSync(bibPath, 'utf8');
  
  // Remove escape characters
  markdown = markdown
    .replace(/\\\*/g, '*')
    .replace(/\\\-/g, '-')
    .replace(/\\\./g, '.')
    .replace(/\\\[/g, '[')
    .replace(/\\\]/g, ']')
    .replace(/\\\(/g, '(')
    .replace(/\\\)/g, ')')
    .replace(/\\\\/g, '\\');

  const citations = [];
  let currentMainSection = '';
  let currentSubSection = '';
  let currentCitation = null;
  let currentAnnotation = '';
  let inAnnotation = false;

  // Process the markdown line by line
  const lines = markdown.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (!line) {
      inAnnotation = false;
      continue;
    }

    // Check for main sections (Primary Sources, Secondary Sources)
    if (line.match(/^\*\*(?:Primary|Secondary) Sources:\*\*$/)) {
      if (currentCitation) {
        currentCitation.annotation = currentAnnotation.trim();
        citations.push(currentCitation);
        currentCitation = null;
        currentAnnotation = '';
      }
      currentMainSection = line.replace(/\*\*/g, '').replace(':', '').trim();
      currentSubSection = ''; // Reset subsection when main section changes
      inAnnotation = false;
      continue;
    }

    // Check for subsections (Articles, Documents, etc.)
    if (line.match(/^\*\*[^:]+:\*\*$/) && !line.includes('Sources:')) {
      if (currentCitation) {
        currentCitation.annotation = currentAnnotation.trim();
        citations.push(currentCitation);
        currentCitation = null;
        currentAnnotation = '';
      }
      currentSubSection = line.replace(/\*\*/g, '').replace(':', '').trim();
      inAnnotation = false;
      continue;
    }

    // Check for citation start
    if (line.startsWith('**') && line.endsWith('.**')) {
      // If we were reading a previous citation, save it
      if (currentCitation) {
        currentCitation.annotation = currentAnnotation.trim();
        citations.push(currentCitation);
      }

      // Extract citation components
      let citationText = line.slice(2, -2); // Remove ** from start and end
      
      // Extract URL if present
      const urlMatch = citationText.match(/\[([^\]]+)\]\(([^)]+)\)/);
      let url = '';
      if (urlMatch) {
        url = urlMatch[2];
        // Remove the URL part from the citation text
        citationText = citationText.replace(urlMatch[0], '').trim();
      }

      // Extract year
      const yearMatch = citationText.match(/\b(\d{4}|n\.d\.)\b/);
      let year = '';
      if (yearMatch) {
        year = yearMatch[1];
      }

      // Extract title (everything between first quotes if present, otherwise up to the year)
      let title = '';
      const titleMatch = citationText.match(/"([^"]+)"/);
      if (titleMatch) {
        title = titleMatch[1];
      } else if (yearMatch) {
        title = citationText.substring(0, citationText.indexOf(year)).trim();
      } else {
        title = citationText;
      }

      // Extract source (everything between year and URL, if present)
      let source = '';
      if (yearMatch) {
        const afterYear = citationText.substring(citationText.indexOf(year) + year.length);
        source = afterYear.split('[')[0].trim();
        source = source.replace(/^\.\s*/, '').replace(/\.$/, '').trim(); // Remove leading and trailing periods
      }

      // Clean up the title
      title = title.replace(/^"/, '').replace(/"$/, ''); // Remove quotes from start/end
      title = title.replace(/\.$/, ''); // Remove trailing period

      // Determine the type
      let type = currentMainSection || 'Primary Sources';
      if (currentSubSection) {
        type += ` - ${currentSubSection}`;
      } else if (type === 'Primary Sources') {
        // Default to Articles if no subsection in Primary Sources
        type += ' - Articles';
      }

      currentCitation = {
        title,
        year,
        source,
        url,
        type,
        annotation: ''
      };
      currentAnnotation = '';
      inAnnotation = false;

      console.log('Parsed citation:', {
        title: title.substring(0, 30) + (title.length > 30 ? '...' : ''),
        year,
        type: currentCitation.type
      });
      continue;
    }

    // If we have a current citation and the line isn't a header, it's part of the annotation
    if (currentCitation && !line.startsWith('**')) {
      inAnnotation = true;
      currentAnnotation += (currentAnnotation ? ' ' : '') + line;
    }
  }

  // Add the last citation if exists
  if (currentCitation) {
    currentCitation.annotation = currentAnnotation.trim();
    citations.push(currentCitation);
  }

  // Sort citations by type and then by year
  citations.sort((a, b) => {
    if (a.type !== b.type) {
      return a.type.localeCompare(b.type);
    }
    return a.year.localeCompare(b.year);
  });

  // Write the JSON file
  fs.writeFileSync(outputPath, JSON.stringify(citations, null, 2));

  console.log(`\nSuccessfully parsed ${citations.length} citations and saved to ${outputPath}`);
  console.log('\nCitation types found:');
  const types = [...new Set(citations.map(c => c.type))];
  types.forEach(type => {
    const count = citations.filter(c => c.type === type).length;
    console.log(`${type}: ${count} citations`);
  });
} catch (error) {
  console.error('Error processing file:', error);
}

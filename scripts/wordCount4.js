const fs = require('fs');
const path = require('path');

// Function to remove inline quotes from JSX
function removeInlineQuotes(text) {
    // Remove InlineQuote components and their content
    text = text.replace(/<InlineQuote[^>]*>.*?<\/InlineQuote>/gs, '');
    // Remove Quote components and their content
    text = text.replace(/<Quote[^>]*>.*?<\/Quote>/gs, '');
    // Remove regular quoted text
    text = text.replace(/"[^"]*"/g, '');
    return text;
}

// Function to remove bibliography entries (keeping only annotations)
function processBibliography(text) {
    try {
        const bibData = JSON.parse(text);
        // Only keep annotations from bibliography
        return bibData.map(entry => entry.annotation || '').join(' ');
    } catch (e) {
        return ''; // Return empty string if not valid JSON
    }
}

// Function to extract content from JSX files
function processJSX(text) {
    // Remove all JSX components that shouldn't be counted
    text = text
        // Remove imports
        .replace(/import.*?;/g, '')
        // Remove exports
        .replace(/export.*?{/g, '')
        // Remove style objects
        .replace(/const.*?Style.*?};/gs, '')
        // Remove InlineQuotes
        .replace(/<InlineQuote[\s\S]*?<\/InlineQuote>/g, '')
        // Remove Quotes
        .replace(/<Quote[\s\S]*?<\/Quote>/g, '')
        // Remove other components
        .replace(/<(Hero|ScrollReveal|FadeIn|Title|SpacingBlock|Credits)[^>]*>[\s\S]*?<\/\1>/g, '')
        // Remove section headers
        .replace(/<header[^>]*>.*?<\/header>/g, '');
    
    // Extract only paragraph content
    const paragraphs = [];
    let match;
    const regex = /<p[^>]*>([\s\S]*?)<\/p>/g;
    
    while ((match = regex.exec(text)) !== null) {
        let content = match[1];
        // Clean up the content
        content = content
            .replace(/<[^>]+>/g, '') // Remove HTML tags
            .replace(/\{[^}]+\}/g, '') // Remove JSX expressions
            .replace(/["']/g, '') // Remove quotes
            .replace(/\s+/g, ' ') // Normalize whitespace
            .trim();
        
        if (content) {
            paragraphs.push(content);
        }
    }
    
    return paragraphs.join(' ');
}

// Function to check if file should be counted
function shouldCountFile(filePath) {
    // Only count component files and bibliography
    const contentFiles = [
        'src/components/Background.jsx',
        'src/components/Effects.jsx',
        'src/components/Thesis.jsx',
        'src/components/TTC.jsx',
        'src/data/bibliography.json'
    ];
    
    return contentFiles.some(file => filePath.replace(/\\/g, '/').endsWith(file));
}

// Function to count words in text
function countWords(text) {
    if (!text) return 0;
    
    // Remove common markdown/HTML elements and clean up
    text = text
        .replace(/[^\w\s]|_/g, ' ') // Remove punctuation
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim();

    // Count words (sequences of letters/numbers)
    const words = text.split(' ').filter(word => word.length > 0);
    return words.length;
}

// Function to process a file
function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        let processedContent = '';

        if (filePath.includes('bibliography.json')) {
            processedContent = processBibliography(content);
        } else if (filePath.endsWith('.jsx')) {
            processedContent = processJSX(content);
        }

        const wordCount = countWords(processedContent);
        return wordCount;
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
        return 0;
    }
}

// Function to recursively process directory
function processDirectory(dirPath) {
    let totalWords = 0;
    const files = fs.readdirSync(dirPath);

    for (const file of files) {
        const fullPath = path.join(dirPath, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
            totalWords += processDirectory(fullPath);
        } else if (stat.isFile()) {
            // Process only content files
            if (shouldCountFile(fullPath)) {
                const count = processFile(fullPath);
                console.log(`${fullPath}: ${count} words`);
                totalWords += count;
            }
        }
    }

    return totalWords;
}

// Main execution
const rootDir = process.argv[2] || path.join(__dirname, '..');
console.log(`Counting words in ${rootDir}...`);
console.log('-----------------------------------');

const totalWords = processDirectory(rootDir);
console.log('-----------------------------------');
console.log(`Total word count: ${totalWords}`);

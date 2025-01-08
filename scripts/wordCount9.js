const fs = require('fs');
const path = require('path');

// Function to extract actual content from JSX files
function extractContent(content) {
    // First, split the content into paragraphs
    const paragraphs = content.split('\n\n');
    
    // Process each paragraph
    const cleanedParagraphs = paragraphs.map(paragraph => {
        // Skip if paragraph looks like a quote or article
        if (paragraph.match(/^["']|^Art(?:icle)?\s*\d+|^[A-Z][^.!?]*[.!?]\s*$|^The\s+[A-Z][^.!?]*[.!?]\s*$/)) {
            return '';
        }
        
        // Remove import statements
        paragraph = paragraph.replace(/import\s+.*?;/g, '');
        
        // Remove export statements
        paragraph = paragraph.replace(/export\s+.*?;/g, '');
        
        // Remove style objects
        paragraph = paragraph.replace(/const\s+\w+Style\s*=\s*{[^}]*}/gs, '');
        
        // Remove JSX component tags
        paragraph = paragraph.replace(/<([A-Z][a-zA-Z]*|\/[A-Z][a-zA-Z]*)[^>]*>/g, '');
        
        // Remove InlineQuote and Quote content blocks
        paragraph = paragraph.replace(/<(?:InlineQuote|Quote)[^>]*>[\s\S]*?<\/(?:InlineQuote|Quote)>/g, '');
        
        // Remove article quotes
        paragraph = paragraph.replace(/Art(?:icle)?\s*\d+[\s\S]*?(?=\n\s*[A-Za-z]|$)/g, '');
        
        // Remove quoted text
        paragraph = paragraph.replace(/["'][^"']*["']/g, '');
        
        // Remove any remaining HTML-like tags
        paragraph = paragraph.replace(/<[^>]+>/g, '');
        
        // Remove component declarations
        paragraph = paragraph.replace(/const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*{[\s\S]*?return\s*/g, '');
        paragraph = paragraph.replace(/};?\s*\)?;?/g, '');
        
        // Remove JavaScript code patterns
        paragraph = paragraph.replace(/const\s+.*?=\s*.*?;/g, '');
        paragraph = paragraph.replace(/function\s+.*?\{[\s\S]*?\}/g, '');
        
        // Clean up special characters and whitespace
        paragraph = paragraph.replace(/[{}]/g, '');
        paragraph = paragraph.replace(/\s+/g, ' ').trim();
        
        // Remove common artifacts
        paragraph = paragraph.replace(/;\s*;/g, ';')
            .replace(/\(\s*<>\s*/g, '')
            .replace(/\s*\);?\s*$/, '')
            .trim();
        
        // Only return paragraphs that look like actual content
        if (paragraph.match(/^[A-Z][^.!?]*[.!?]/) || // Starts with capital letter and ends with punctuation
            paragraph.match(/^[A-Z][^.!?]*\s+[a-z]/) || // Starts with capital and has lowercase words
            paragraph.match(/^This\s+[a-z]/)) { // Starts with "This" followed by lowercase
            return paragraph;
        }
        return '';
    });
    
    // Join paragraphs and clean up
    return cleanedParagraphs.filter(p => p).join('\n\n');
}

// Function to count words in a string
function countWords(str) {
    // Split by whitespace and filter out unwanted words
    return str.split(/\s+/)
        .filter(word => {
            // Must be longer than 1 character
            if (word.length <= 1) return false;
            
            // Skip common code artifacts
            if (word.match(/^[;(),.<>{}]|^(const|function|return|export|default)$/)) {
                return false;
            }
            
            // Skip if it's just a number
            if (word.match(/^\d+$/)) return false;
            
            return true;
        })
        .length;
}

// Function to process a file
function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const extractedContent = extractContent(content);
        const wordCount = countWords(extractedContent);
        console.log(`\nFile: ${path.basename(filePath)}`);
        console.log('Extracted content:');
        console.log(extractedContent);
        console.log(`Word count: ${wordCount}`);
        return wordCount;
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
        return 0;
    }
}

// Main execution
const files = [
    'src/components/Background.jsx',
    'src/components/Effects.jsx',
    'src/components/Thesis.jsx',
    'src/components/TTC.jsx'
];

let totalWords = 0;

console.log('Word Count Analysis\n');

files.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    const wordCount = processFile(filePath);
    totalWords += wordCount;
});

console.log(`\nTotal word count across all files: ${totalWords}`);

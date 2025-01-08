const fs = require('fs');
const path = require('path');

// Function to extract actual content from JSX files
function extractContent(content) {
    // Remove import statements
    content = content.replace(/import\s+.*?;/g, '');
    
    // Remove export statements
    content = content.replace(/export\s+.*?;/g, '');
    
    // Remove style objects
    content = content.replace(/const\s+\w+Style\s*=\s*{[^}]*}/gs, '');
    
    // Remove JSX component tags
    content = content.replace(/<([A-Z][a-zA-Z]*|\/[A-Z][a-zA-Z]*)[^>]*>/g, '');
    
    // Remove InlineQuote content blocks
    content = content.replace(/<InlineQuote[^>]*>[\s\S]*?<\/InlineQuote>/g, '');
    
    // Remove Quote content blocks
    content = content.replace(/<Quote[^>]*>[\s\S]*?<\/Quote>/g, '');
    
    // Remove article quotes (numbered articles from conventions)
    content = content.replace(/Art(?:icle)?\s*\d+[\s\S]*?(?=\n\s*[A-Za-z]|$)/g, '');
    
    // Remove quoted text blocks (even without InlineQuote tags)
    content = content.replace(/"[^"]*"/g, '');
    
    // Remove any remaining HTML-like tags
    content = content.replace(/<[^>]+>/g, '');
    
    // Remove any remaining component declarations
    content = content.replace(/const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*{[\s\S]*?return\s*/g, '');
    
    // Remove closing braces and parentheses from component declarations
    content = content.replace(/};?\s*\)?;?/g, '');
    
    // Remove any remaining JavaScript code patterns
    content = content.replace(/const\s+.*?=\s*.*?;/g, '');
    content = content.replace(/function\s+.*?\{[\s\S]*?\}/g, '');
    
    // Clean up any remaining special characters and whitespace
    content = content.replace(/[{}]/g, '');
    content = content.replace(/\s+/g, ' ').trim();
    
    return content;
}

// Function to count words in a string
function countWords(str) {
    // Split by whitespace and filter out empty strings
    return str.split(/\s+/).filter(word => word.length > 0).length;
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

const fs = require('fs');
const path = require('path');

const dir = './resources/js/Pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // remove existing title-wrapper blocks
    content = content.replace(/<div className="title-wrapper pt-30">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, '');
    // remove smaller title-wrapper blocks like in Icons
    content = content.replace(/<div className="title-wrapper pt-30">[\s\S]*?<h2>.*?<\/h2>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, '');
    
    // Inject PageTitle after Head
    const titleMatch = content.match(/<Head title="(.*?)" \/>/);
    if (titleMatch && !content.includes('<PageTitle')) {
        const title = titleMatch[1];
        content = content.replace(/(<Head title=".*?" \/>)/, `$1\n            <PageTitle title="${title}" />`);
        
        // Add import
        content = `import PageTitle from "@/Components/PageTitle";\n` + content;
    }
    
    fs.writeFileSync(path.join(dir, file), content);
    console.log(`Updated ${file}`);
});

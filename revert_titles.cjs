const fs = require('fs');
const path = require('path');

const dir = './resources/js/Pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // remove the PageTitle import
    content = content.replace(/import PageTitle from "@\/Components\/PageTitle";\n/g, '');
    
    // remove the PageTitle component call
    content = content.replace(/<PageTitle title=".*?" \/>\n/g, '');
    content = content.replace(/\{\/\* <PageTitle title=".*?" \/> \*\/\}\n/g, '');
    
    fs.writeFileSync(path.join(dir, file), content);
    console.log(`Reverted ${file}`);
});

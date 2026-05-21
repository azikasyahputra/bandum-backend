import os
import re

pages_dir = '/home/azika/Documents/Data/Project/template-laravel-inertia-react-rbac/resources/js/Pages'

title_wrapper_regex = re.compile(
    r'<div\s+className="title-wrapper pt-30">\s*<div\s+className="row align-items-center">.*?(?:<h2>|<h1>)(.*?)(?:</h2>|</h1>).*?</nav>\s*</div>\s*</div>\s*</div>\s*</div>',
    re.DOTALL
)

for filename in os.listdir(pages_dir):
    if not filename.endswith('.jsx'):
        continue
        
    filepath = os.path.join(pages_dir, filename)
    with open(filepath, 'r') as f:
        content = f.read()
        
    if '<div className="title-wrapper pt-30">' in content:
        # Check if we can extract the title
        match = title_wrapper_regex.search(content)
        if match:
            title = match.group(1).strip()
            
            # Need to determine breadcrumb items if there's any hardcoded.
            # But the standard is usually `Dashboard > Section > Title`.
            # Let's extract breadcrumbs text
            breadcrumb_regex = re.compile(r'<ol className="breadcrumb">(.*?)</ol>', re.DOTALL)
            bc_match = breadcrumb_regex.search(match.group(0))
            
            bc_items = []
            if bc_match:
                bc_html = bc_match.group(1)
                bc_list = re.findall(r'<li.*?>(.*?)</li>', bc_html, re.DOTALL)
                # First one is usually Dashboard.
                # Last one is usually Title.
                # Middle ones are what we need.
                for item in bc_list[1:-1]:
                    # extract label
                    label_match = re.search(r'<a.*?>(.*?)</a>', item)
                    if label_match:
                        bc_items.append(f'{{ label: "{label_match.group(1).strip()}" }}')
                    else:
                        bc_items.append(f'{{ label: "{item.strip()}" }}')
            
            bc_prop = ""
            if bc_items:
                bc_prop = f' breadcrumbs={{[{", ".join(bc_items)}]}}'
            
            # Now replace
            new_content = title_wrapper_regex.sub(f'<PageTitle title="{title}"{bc_prop} />', content)
            
            # Add import
            if 'PageTitle' not in new_content:
                # Add after other imports
                new_content = re.sub(r'(import .*?;?\n)(?=\n*export|const|function)', r'\1import PageTitle from "@/Components/PageTitle";\n', new_content, count=1)
                
            with open(filepath, 'w') as f:
                f.write(new_content)
            
            print(f"Refactored {filename}")

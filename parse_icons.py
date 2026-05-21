import re

with open('/home/azika/Documents/Template HTML/plain-free-bootstrap-admin-template-main-white/icons.html', 'r') as f:
    content = f.read()

icons = re.findall(r'<i class="lni lni-([^"]+)"></i>\s*<span>([^<]+)</span>', content)

jsx = """import { Head } from "@inertiajs/react";

export default function Icons() {
    const icons = [
"""

for icon, name in icons:
    jsx += f'        "{icon}",\n'

jsx += """    ];

    return (
        <>
            <Head title="Icons" />

            <div className="title-wrapper pt-30">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="title">
                            <h2>Icons</h2>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="icons-wrapper">
                <div className="row">
                    <div className="col-12">
                        <div className="card-style">
                            <div className="title d-flex justify-content-between">
                                <div className="left">
                                    <h6 className="text-medium mb-10">Icons Pack</h6>
                                </div>
                            </div>
                            <ul className="icons">
                                {icons.map((icon, idx) => (
                                    <li className="trigger Free" key={idx}>
                                        <i className={`lni lni-${icon}`}></i><span>{icon}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
"""

with open('/home/azika/Documents/Data/Project/template-laravel-inertia-react-rbac/resources/js/Pages/Icons.jsx', 'w') as f:
    f.write(jsx)

print(f"Generated Icons.jsx with {len(icons)} icons")


import component from './component.json' with { type: 'json' };

function convertInDom(obj) {
    if (!obj || typeof obj === "string") {
        const element = document.createElement("null");
        element.insertAdjacentText('beforeend', obj)
        return element;
    }

    let rootElement = document.createElement(obj.tag);
    let attrs = obj?.attrs;
    let children = obj?.children;
    if (attrs) {
        for (const [key, value] of Object.entries(attrs)) {
            rootElement.setAttribute(key, value);
        }
    }

    if (children) {
        const transformedElements = children.map(el => convertInDom(el));

        transformedElements.forEach(el => {
                rootElement.appendChild(el);
        });
    }

    return rootElement;
}

const result = convertInDom(component);
document.body.append(result)
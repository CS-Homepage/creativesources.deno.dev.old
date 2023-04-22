// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const isSSR = ()=>typeof _nano !== 'undefined' && _nano.isSSR === true;
const tick = Promise.prototype.then.bind(Promise.resolve());
const removeAllChildNodes = (parent)=>{
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
};
const strToHash = (s)=>{
    let hash = 0;
    for(let i = 0; i < s.length; i++){
        const chr = s.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
    }
    return Math.abs(hash).toString(32);
};
const appendChildren = (element, children, escape = true)=>{
    if (!Array.isArray(children)) {
        appendChildren(element, [
            children
        ], escape);
        return;
    }
    if (typeof children === 'object') children = Array.prototype.slice.call(children);
    children.forEach((child)=>{
        if (Array.isArray(child)) appendChildren(element, child, escape);
        else {
            const c = _render(child);
            if (typeof c !== 'undefined') {
                if (Array.isArray(c)) appendChildren(element, c, escape);
                else {
                    if (isSSR() && !escape) element.appendChild(c.nodeType == null ? c.toString() : c);
                    else element.appendChild(c.nodeType == null ? document.createTextNode(c.toString()) : c);
                }
            }
        }
    });
};
const SVG = (props)=>{
    const child = props.children[0];
    const attrs = child.attributes;
    if (isSSR()) return child;
    const svg = hNS('svg');
    for(let i = attrs.length - 1; i >= 0; i--){
        svg.setAttribute(attrs[i].name, attrs[i].value);
    }
    svg.innerHTML = child.innerHTML;
    return svg;
};
const render = (component, parent = null, removeChildNodes = true)=>{
    let el = _render(component);
    if (Array.isArray(el)) {
        el = el.map((e)=>_render(e));
        if (el.length === 1) el = el[0];
    }
    if (parent) {
        if (removeChildNodes) removeAllChildNodes(parent);
        if (el && parent.id && parent.id === el.id && parent.parentElement) {
            parent.parentElement.replaceChild(el, parent);
        } else {
            if (Array.isArray(el)) el.forEach((e)=>{
                appendChildren(parent, _render(e));
            });
            else appendChildren(parent, _render(el));
        }
        return parent;
    } else {
        if (isSSR() && !Array.isArray(el)) return [
            el
        ];
        return el;
    }
};
const hydrate = render;
const _render = (comp)=>{
    if (comp === null || comp === false || typeof comp === 'undefined') return [];
    if (typeof comp === 'string' || typeof comp === 'number') return comp.toString();
    if (comp.tagName && comp.tagName.toLowerCase() === 'svg') return SVG({
        children: [
            comp
        ]
    });
    if (comp.tagName) return comp;
    if (comp && comp.component && comp.component.isClass) return renderClassComponent(comp);
    if (comp.isClass) return renderClassComponent({
        component: comp,
        props: {}
    });
    if (comp.component && typeof comp.component === 'function') return renderFunctionalComponent(comp);
    if (Array.isArray(comp)) return comp.map((c)=>_render(c)).flat();
    if (typeof comp === 'function' && !comp.isClass) return _render(comp());
    if (comp.component && comp.component.tagName && typeof comp.component.tagName === 'string') return _render(comp.component);
    if (Array.isArray(comp.component)) return _render(comp.component);
    if (comp.component) return _render(comp.component);
    if (typeof comp === 'object') return [];
    console.warn('Something unexpected happened with:', comp);
};
const renderFunctionalComponent = (fncComp)=>{
    const { component , props  } = fncComp;
    return _render(component(props));
};
const renderClassComponent = (classComp)=>{
    const { component , props  } = classComp;
    const hash = strToHash(component.toString());
    component.prototype._getHash = ()=>hash;
    const Component = new component(props);
    if (!isSSR()) Component.willMount();
    let el = Component.render();
    el = _render(el);
    Component.elements = el;
    if (props && props.ref) props.ref(Component);
    if (!isSSR()) tick(()=>{
        Component._didMount();
    });
    return el;
};
const hNS = (tag)=>document.createElementNS('http://www.w3.org/2000/svg', tag);
const h = (tagNameOrComponent, props = {}, ...children)=>{
    if (props && props.children) {
        if (Array.isArray(children)) {
            if (Array.isArray(props.children)) children = [
                ...props.children,
                ...children
            ];
            else children.push(props.children);
        } else {
            if (Array.isArray(props.children)) children = props.children;
            else children = [
                props.children
            ];
        }
    }
    if (isSSR() && _nano.ssrTricks.isWebComponent(tagNameOrComponent)) {
        const element = _nano.ssrTricks.renderWebComponent(tagNameOrComponent, props, children, _render);
        if (element === null) return `ERROR: "<${tagNameOrComponent} />"`;
        else return element;
    }
    if (typeof tagNameOrComponent !== 'string') return {
        component: tagNameOrComponent,
        props: {
            ...props,
            children: children
        }
    };
    try {
        if (isSSR() && typeof tagNameOrComponent === 'string' && !document) throw new Error('document is not defined');
    } catch (err) {
        console.log('ERROR:', err.message, '\n > Please read: https://github.com/nanojsx/nano/issues/106');
    }
    let ref;
    const element = tagNameOrComponent === 'svg' ? hNS('svg') : document.createElement(tagNameOrComponent);
    const isEvent = (el, p)=>{
        if (0 !== p.indexOf('on')) return false;
        if (el._ssr) return true;
        return typeof el[p] === 'object' || typeof el[p] === 'function';
    };
    for(const p in props){
        if (p === 'style' && typeof props[p] === 'object') {
            const styles = Object.keys(props[p]).map((k)=>`${k}:${props[p][k]}`).join(';').replace(/[A-Z]/g, (match)=>`-${match.toLowerCase()}`);
            props[p] = `${styles};`;
        }
        if (p === 'ref') ref = props[p];
        else if (isEvent(element, p.toLowerCase())) element.addEventListener(p.toLowerCase().substring(2), (e)=>props[p](e));
        else if (p === 'dangerouslySetInnerHTML' && props[p].__html) {
            if (!isSSR()) {
                const fragment = document.createElement('fragment');
                fragment.innerHTML = props[p].__html;
                element.appendChild(fragment);
            } else {
                element.innerHTML = props[p].__html;
            }
        } else if (p === 'innerHTML' && props[p].__dangerousHtml) {
            if (!isSSR()) {
                const fragment = document.createElement('fragment');
                fragment.innerHTML = props[p].__dangerousHtml;
                element.appendChild(fragment);
            } else {
                element.innerHTML = props[p].__dangerousHtml;
            }
        } else if (/className/i.test(p)) console.warn('You can use "class" instead of "className".');
        else if (typeof props[p] !== 'undefined') element.setAttribute(p, props[p]);
    }
    const escape = ![
        'noscript',
        'script',
        'style'
    ].includes(tagNameOrComponent);
    appendChildren(element, children, escape);
    if (ref) ref(element);
    return element;
};
const detectSSR = ()=>{
    const isDeno = typeof Deno !== 'undefined';
    const hasWindow = typeof window !== 'undefined' ? true : false;
    return typeof _nano !== 'undefined' && _nano.isSSR || isDeno || !hasWindow;
};
const escapeHtml = (unsafe)=>{
    if (unsafe && typeof unsafe === 'string') return unsafe.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
    return unsafe;
};
class HTMLElementSSR {
    tagName;
    isSelfClosing = false;
    nodeType = null;
    _ssr;
    constructor(tag){
        this.tagName = tag;
        const selfClosing = [
            'area',
            'base',
            'br',
            'col',
            'embed',
            'hr',
            'img',
            'input',
            'link',
            'meta',
            'param',
            'source',
            'track',
            'wbr'
        ];
        this.nodeType = 1;
        if (selfClosing.indexOf(tag) >= 0) {
            this._ssr = `<${tag} />`;
            this.isSelfClosing = true;
        } else {
            this._ssr = `<${tag}></${tag}>`;
        }
    }
    get outerHTML() {
        return this.toString();
    }
    get innerHTML() {
        return this.innerText;
    }
    set innerHTML(text) {
        this.innerText = text;
    }
    get innerText() {
        const reg = /(^<[^>]+>)(.+)?(<\/[a-z0-9]+>$|\/>$)/gm;
        return reg.exec(this._ssr)?.[2] || '';
    }
    set innerText(text) {
        const reg = /(^<[^>]+>)(.+)?(<\/[a-z0-9]+>$|\/>$)/gm;
        const replacer = (_match, p1, _p2, p3)=>[
                p1,
                text,
                p3
            ].join('');
        this._ssr = this._ssr.replace(reg, replacer);
    }
    getAttribute(_name) {
        return null;
    }
    get classList() {
        const element = this._ssr;
        const classesRegex = /^<\w+.+(\sclass=")([^"]+)"/gm;
        return {
            add: (name)=>{
                this.setAttribute('class', name);
            },
            entries: {
                get length () {
                    const classes = classesRegex.exec(element);
                    if (classes && classes[2]) return classes[2].split(' ').length;
                    return 0;
                }
            }
        };
    }
    toString() {
        return this._ssr;
    }
    setAttributeNS(_namespace, name, value) {
        this.setAttribute(name, value);
    }
    setAttribute(name, value) {
        const replacer1 = (_match, p1, p2)=>`${p1}${escapeHtml(name)}="${escapeHtml(value)}" ${p2}`;
        const replacer2 = (_match, p1, p2)=>`${p1} ${escapeHtml(name)}="${escapeHtml(value)}"${p2}`;
        if (this.isSelfClosing) this._ssr = this._ssr.replace(/(^<[a-z0-9]+ )(.+)/gm, replacer1);
        else this._ssr = this._ssr.replace(/(^<[^>]+)(.+)/gm, replacer2);
    }
    append(child) {
        this.appendChild(child);
    }
    appendChild(child) {
        const index = this._ssr.lastIndexOf('</');
        this._ssr = this._ssr.substring(0, index) + child + this._ssr.substring(index);
    }
    get children() {
        const reg = /<([a-z0-9]+)((?!<\/\1).)*<\/\1>/gms;
        const array = [];
        let match;
        while((match = reg.exec(this.innerHTML)) !== null){
            array.push(match[0].replace(/[\s]+/gm, ' '));
        }
        return array;
    }
    addEventListener(_type, _listener, _options) {}
}
class DocumentSSR {
    body;
    head;
    constructor(){
        this.body = this.createElement('body');
        this.head = this.createElement('head');
    }
    createElement(tag) {
        return new HTMLElementSSR(tag);
    }
    createElementNS(_URI, tag) {
        return this.createElement(tag);
    }
    createTextNode(text) {
        return escapeHtml(text);
    }
    querySelector(_query) {
        return undefined;
    }
}
const documentSSR = ()=>{
    return new DocumentSSR();
};
new Map();
const ssrTricks = {
    isWebComponent: (tagNameOrComponent)=>{
        return typeof tagNameOrComponent === 'string' && tagNameOrComponent.includes('-') && _nano.customElements.has(tagNameOrComponent);
    },
    renderWebComponent: (tagNameOrComponent, props, children, _render)=>{
        const customElement = _nano.customElements.get(tagNameOrComponent);
        const component = _render({
            component: customElement,
            props: {
                ...props,
                children: children
            }
        });
        const match = component.toString().match(/^<(?<tag>[a-z]+)>(.*)<\/\k<tag>>$/);
        if (match) {
            const element = document.createElement(match[1]);
            element.innerText = match[2];
            function replacer(match, p1, _offset, _string) {
                return match.replace(p1, '');
            }
            element.innerText = element.innerText.replace(/<\w+[^>]*(\s(on\w*)="[^"]*")/gm, replacer);
            return element;
        } else {
            return null;
        }
    }
};
const initGlobalVar = ()=>{
    const isSSR = detectSSR() === true ? true : undefined;
    const location = {
        pathname: '/'
    };
    const document1 = isSSR ? documentSSR() : window.document;
    globalThis._nano = {
        isSSR,
        location,
        document: document1,
        customElements: new Map(),
        ssrTricks
    };
};
initGlobalVar();
class CListener {
    _route;
    _listeners = new Map();
    constructor(){
        if (isSSR()) return;
        this._route = window.location.pathname;
        const event = ()=>{
            const newRoute = window.location.pathname;
            this._listeners.forEach((fnc)=>{
                fnc(newRoute, this._route);
            });
            this._route = newRoute;
        };
        window.addEventListener('pushstate', event);
        window.addEventListener('replacestate', event);
    }
    use() {
        const id = Math.random().toString(36).substring(2);
        return {
            subscribe: (fnc)=>{
                this._listeners.set(id, fnc);
            },
            cancel: ()=>{
                if (this._listeners.has(id)) this._listeners.delete(id);
            }
        };
    }
}
const MODE_SLASH = 0;
const MODE_TEXT = 1;
const MODE_WHITESPACE = 2;
const MODE_TAGNAME = 3;
const MODE_COMMENT = 4;
const MODE_PROP_SET = 5;
const MODE_PROP_APPEND = 6;
const CHILD_APPEND = 0;
const evaluate = (h, built, fields, args)=>{
    let tmp;
    built[0] = 0;
    for(let i = 1; i < built.length; i++){
        const type = built[i++];
        const value = built[i] ? (built[0] |= type ? 1 : 2, fields[built[i++]]) : built[++i];
        if (type === 3) {
            args[0] = value;
        } else if (type === 4) {
            args[1] = Object.assign(args[1] || {}, value);
        } else if (type === 5) {
            (args[1] = args[1] || {})[built[++i]] = value;
        } else if (type === 6) {
            args[1][built[++i]] += `${value}`;
        } else if (type) {
            tmp = h.apply(value, evaluate(h, value, fields, [
                '',
                null
            ]));
            args.push(tmp);
            if (value[0]) {
                built[0] |= 2;
            } else {
                built[i - 2] = CHILD_APPEND;
                built[i] = tmp;
            }
        } else {
            args.push(value);
        }
    }
    return args;
};
const build = function(statics, ...rest) {
    const fields = [
        statics,
        ...rest
    ];
    const h = this;
    let mode = 1;
    let buffer = '';
    let quote = '';
    let current = [
        0
    ];
    let __char;
    let propName;
    const commit = (field)=>{
        if (mode === 1 && (field || (buffer = buffer.replace(/^\s*\n\s*|\s*\n\s*$/g, '')))) {
            if (false) {
                current.push(field ? fields[field] : buffer);
            } else {
                current.push(0, field, buffer);
            }
        } else if (mode === 3 && (field || buffer)) {
            if (false) {
                current[1] = field ? fields[field] : buffer;
            } else {
                current.push(3, field, buffer);
            }
            mode = MODE_WHITESPACE;
        } else if (mode === 2 && buffer === '...' && field) {
            if (false) {
                current[2] = Object.assign(current[2] || {}, fields[field]);
            } else {
                current.push(4, field, 0);
            }
        } else if (mode === 2 && buffer && !field) {
            if (false) {
                (current[2] = current[2] || {})[buffer] = true;
            } else {
                current.push(5, 0, true, buffer);
            }
        } else if (mode >= 5) {
            if (false) {
                if (mode === 5) {
                    (current[2] = current[2] || {})[propName] = field ? buffer ? buffer + fields[field] : fields[field] : buffer;
                    mode = MODE_PROP_APPEND;
                } else if (field || buffer) {
                    current[2][propName] += field ? buffer + fields[field] : buffer;
                }
            } else {
                if (buffer || !field && mode === 5) {
                    current.push(mode, 0, buffer, propName);
                    mode = MODE_PROP_APPEND;
                }
                if (field) {
                    current.push(mode, field, 0, propName);
                    mode = MODE_PROP_APPEND;
                }
            }
        }
        buffer = '';
    };
    for(let i = 0; i < statics.length; i++){
        if (i) {
            if (mode === 1) {
                commit();
            }
            commit(i);
        }
        for(let j = 0; j < statics[i].length; j++){
            __char = statics[i][j];
            if (mode === 1) {
                if (__char === '<') {
                    commit();
                    if (false) {
                        current = [
                            current,
                            '',
                            null
                        ];
                    } else {
                        current = [
                            current
                        ];
                    }
                    mode = MODE_TAGNAME;
                } else {
                    buffer += __char;
                }
            } else if (mode === 4) {
                if (buffer === '--' && __char === '>') {
                    mode = MODE_TEXT;
                    buffer = '';
                } else {
                    buffer = __char + buffer[0];
                }
            } else if (quote) {
                if (__char === quote) {
                    quote = '';
                } else {
                    buffer += __char;
                }
            } else if (__char === '"' || __char === "'") {
                quote = __char;
            } else if (__char === '>') {
                commit();
                mode = MODE_TEXT;
            } else if (!mode) {} else if (__char === '=') {
                mode = MODE_PROP_SET;
                propName = buffer;
                buffer = '';
            } else if (__char === '/' && (mode < 5 || statics[i][j + 1] === '>')) {
                commit();
                if (mode === 3) {
                    current = current[0];
                }
                mode = current;
                if (false) {
                    (current = current[0]).push(h(...mode.slice(1)));
                } else {
                    (current = current[0]).push(2, 0, mode);
                }
                mode = MODE_SLASH;
            } else if (__char === ' ' || __char === '\t' || __char === '\n' || __char === '\r') {
                commit();
                mode = MODE_WHITESPACE;
            } else {
                buffer += __char;
            }
            if (mode === 3 && buffer === '!--') {
                mode = MODE_COMMENT;
                current = current[0];
            }
        }
    }
    commit();
    if (false) {
        return current.length > 2 ? current.slice(1) : current[1];
    }
    return current;
};
const CACHES = new Map();
const regular = function(statics) {
    let tmp = CACHES.get(this);
    if (!tmp) {
        tmp = new Map();
        CACHES.set(this, tmp);
    }
    tmp = evaluate(this, tmp.get(statics) || (tmp.set(statics, tmp = build(statics)), tmp), arguments, []);
    return tmp.length > 1 ? tmp : tmp[0];
};
const __default = false ? build : regular;
__default.bind(h);
class Store {
    _state;
    _prevState;
    _listeners = new Map();
    _storage;
    _id;
    constructor(defaultState, name = '', storage = 'memory'){
        if (isSSR()) storage = 'memory';
        this._id = name;
        this._storage = storage;
        this._state = this._prevState = defaultState;
        if (storage === 'memory' || !storage) return;
        const Storage = storage === 'local' ? localStorage : sessionStorage;
        const item = Storage.getItem(this._id);
        if (item) {
            this._state = this._prevState = JSON.parse(item);
        } else Storage.setItem(this._id, JSON.stringify(defaultState));
    }
    persist(newState) {
        if (this._storage === 'memory') return;
        const Storage = this._storage === 'local' ? localStorage : sessionStorage;
        Storage.setItem(this._id, JSON.stringify(newState));
    }
    clear() {
        this._state = this._prevState = undefined;
        if (this._storage === 'local') localStorage.removeItem(this._id);
        else if (this._storage === 'session') sessionStorage.removeItem(this._id);
    }
    setState(newState) {
        this.state = newState;
    }
    set state(newState) {
        this._prevState = this._state;
        this._state = newState;
        this.persist(newState);
        this._listeners.forEach((fnc)=>{
            fnc(this._state, this._prevState);
        });
    }
    get state() {
        return this._state;
    }
    use() {
        const id = Math.random().toString(36).substring(2, 9);
        const _this = this;
        return {
            get state () {
                return _this.state;
            },
            setState: (newState)=>{
                this.state = newState;
            },
            subscribe: (fnc)=>{
                this._listeners.set(id, fnc);
            },
            cancel: ()=>{
                if (this._listeners.has(id)) this._listeners.delete(id);
            }
        };
    }
}
<<<<<<< HEAD
function Background() {
    console.log("Background started...");
    return h("div", {
        id: "background"
    }, h("p", {
        style: "font-size: 34px;"
    }, "MATRIX"));
}
=======
>>>>>>> 249fa1163d622d17091a2437bca28cae8ae87a02
function Intro() {
    console.log("Intro...");
    return h("img", {
        class: "transition",
        src: "artwork/cs.png"
    });
}
<<<<<<< HEAD
function bytesToUuid(bytes) {
    const bits = [
        ...bytes
    ].map((bit)=>{
        const s = bit.toString(16);
        return bit < 0x10 ? "0" + s : s;
    });
    return [
        ...bits.slice(0, 4),
        "-",
        ...bits.slice(4, 6),
        "-",
        ...bits.slice(6, 8),
        "-",
        ...bits.slice(8, 10),
        "-",
        ...bits.slice(10, 16)
    ].join("");
}
let _nodeId;
let _clockseq;
let _lastMSecs = 0;
let _lastNSecs = 0;
function generate(options, buf, offset) {
    let i = buf && offset || 0;
    const b = buf ?? [];
    options ??= {};
    let { node =_nodeId , clockseq =_clockseq  } = options;
    if (node === undefined || clockseq === undefined) {
        const seedBytes = options.random ?? options.rng ?? crypto.getRandomValues(new Uint8Array(16));
        if (node === undefined) {
            node = _nodeId = [
                seedBytes[0] | 0x01,
                seedBytes[1],
                seedBytes[2],
                seedBytes[3],
                seedBytes[4],
                seedBytes[5]
            ];
        }
        if (clockseq === undefined) {
            clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
=======
function Screening() {
    console.log("Screening...");
    function animate() {
        console.log("Animate...");
        const screening = document.getElementById("screening");
        console.log(screening);
        if (screening) {
            const msg = Array.from("Welcome to the CS Deno Server v1.0\n");
            let text = "";
            for (const __char of msg){
                text += __char;
                console.log(text);
                screening.innerText = text;
            }
>>>>>>> 249fa1163d622d17091a2437bca28cae8ae87a02
        }
    }
    let { msecs =new Date().getTime() , nsecs =_lastNSecs + 1  } = options;
    const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000;
    if (dt < 0 && options.clockseq === undefined) {
        clockseq = clockseq + 1 & 0x3fff;
    }
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
        nsecs = 0;
    }
    if (nsecs > 10000) {
        throw new Error("Can't create more than 10M uuids/sec");
    }
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq;
    msecs += 12219292800000;
    const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff;
    const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff;
    b[i++] = tmh >>> 24 & 0xf | 0x10;
    b[i++] = tmh >>> 16 & 0xff;
    b[i++] = clockseq >>> 8 | 0x80;
    b[i++] = clockseq & 0xff;
    for(let n = 0; n < 6; ++n){
        b[i + n] = node[n];
    }
    return buf ?? bytesToUuid(b);
}
const uuid = generate().toString();
const secCookie = {
    name: "visitorID",
    value: uuid,
    httpOnly: true,
    expires: new Date(2024, 0, 1),
    sameSite: "Strict"
};
function Screening() {
    console.log("Screening...");
    const home = document.getElementById("homepage");
    if (home) {
        home.style.padding = "10px";
        home.style.textAlign = "left";
    }
    async function Animate() {
        console.log("Animate...");
        const html1 = "<span style='color:white;'>";
        const array1 = Array.from("Welcome to the CS Deno Server v1.");
        const html2 = "</span><br /><br />";
        const array2 = Array.from("If you proceed:");
        const nextLine = "<br />";
        const array3 = Array.from("You accept one cookie, visitorID: ");
        const html3 = "<span style='color:yellow;'>";
        const visitorID = Array.from(secCookie.value);
        const html5 = "</span><br />";
        const array4 = Array.from("We store your browser and IP.");
        const array5 = Array.from("Proceed? (Y/N)");
        async function typeText(array) {
            if (home) {
                let i = 0;
                for await (const __char of array){
                    setTimeout(()=>{
                        text += __char;
                        console.log(text);
                        home.innerHTML = text;
                    }, 132 * i);
                    i++;
                }
            }
        }
        function setHTML(html) {
            if (home) {
                text += html;
                console.log(text);
                home.innerHTML = text;
            }
        }
        async function main() {
            setHTML(html1);
            await typeText(array1).then(()=>setHTML(html2)).then(()=>typeText(array2)).then(()=>setHTML(nextLine)).then(()=>typeText(array3));
            setHTML(html3);
            await typeText(visitorID);
            setHTML(html5);
            await typeText(array4);
            setHTML(nextLine);
            await typeText(array5);
        }
        let text = "";
        await main();
    }
    return h(Animate, null);
}
function Background() {
    console.log("Background started...");
    return h("p", {
        style: "font-size: 34px;"
    }, "MATRIX");
}
const home = document.getElementById('homepage');
function startScreening() {
    hydrate(h(Screening, null), home);
}
function proceedOrNot(ev) {
    if (ev.key === "y" || ev.key === "Y") proceed();
    else if (ev.key === "n" || ev.key === "N") exitScreening();
}
function proceed() {
    hydrate(h(Background, null), home);
    document.removeEventListener("keydown", proceedOrNot);
}
function exitScreening() {
    document.removeEventListener("keydown", proceedOrNot);
    console.log("EXIT...");
}
if (home) {
    hydrate(h(Intro, null), home);
    setTimeout(startScreening, 9000);
}
document.addEventListener("keydown", proceedOrNot);

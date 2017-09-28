class DOMNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
  }

  html(content) {
    if (content) {
      this.nodes.forEach(node => node.innerHTML = content);
      return this;
    } else return this.nodes[0].innerHTML;
  }

  empty() {
    this.html('');
  }

  append(content) {
    let toAppend = "";
    if (content instanceof DOMNodeCollection) {
      content.nodes.forEach(node => toAppend.concat(node.outerHTML));
    }
    if (content instanceof HTMLElement) {
      toAppend = content.outerHTML;
    }
    if (typeof content === "string") {
      toAppend = content;
    }
    this.nodes.forEach(node => node.innerHTML += toAppend);
    return this;
  }

  attr(name, value) {
    if (value === undefined) {
      return this.nodes[0].getAttribute(name);
    }
    this.nodes.forEach(node => node.setAttribute(name, value));
    return this;
  }

  addClass(className) {
    this.nodes.forEach(el => {
      if (!Array.from(el.classList).includes(className))
        el.className += ` ${className}`;
    });
    return this;
  }

  removeClass(className) {
    this.nodes.forEach(el => {
      el.className = el.className.replace(className, "");
    });
    return this;
  }

  toggleClass(toggleClass) {
    this.each(node => node.classList.toggle(toggleClass));
  }

  children() {
    let childrenArr = [];
    this.nodes.forEach(el => childrenArr = childrenArr.concat(Array.from(el.children)));
    return new DOMNodeCollection(childrenArr);
  }

  parent() {
    const parentArr = [];
    this.nodes.forEach(el => parentArr.push(el.parentNode));
    return new DOMNodeCollection(parentArr);
  }

  find(selector) {
    let foundNodes = [];
    this.nodes.forEach(node => {
      return foundNodes.concat(Array.from(node.querySelectorAll(selector)));
    });
  }

  remove() {
    this.nodes.forEach(node => node.outerHTML = '');
    this.nodes = [];
    return this;
  }

  on(eventType, callback) {
    this.nodes.forEach(el => {
      if (el.eventHandlers === undefined) el.eventHandlers = {};
      if (el.eventHandlers[eventType] === undefined) el.eventHandlers[eventType] = [];
      el.eventHandlers[eventType].push(callback);
      el.addEventListener(eventType, callback);
    });
    return this;
  }

  off(eventType) {
    this.nodes.forEach(el => {
      if (el.eventHandlers !== undefined && el.eventHandlers[eventType] !== undefined) {
        el.eventHandlers[eventType].forEach(callback => el.removeEventListener(eventType, callback));
        el.eventHandlers[eventType] = [];
      }
    });
    return this;
  }

  clear() {
    this.value = "";
  }
}

export default DOMNodeCollection;

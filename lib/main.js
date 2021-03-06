import DOMNodeCollection from './DOMNodeCollection';

let funcsOnLoad = [];

document.addEventListener('DOMContentLoaded', () => funcsOnLoad.forEach(func => func()));

window._4 = (e) => {

  if (typeof e === 'string') {
    const nodes = Array.from(document.querySelectorAll(e));
    const nodeCollection = new DOMNodeCollection(nodes);
    return nodeCollection;
  }

  if (e instanceof Function) {
    if (document.readyState === 'complete')
      e();
    else {
      funcsOnLoad.push(e);
    }
  }
};

_4.ajax = (options) => {
  const finalOptions = {
    url: window.location,
    method: 'GET',
    data: {},
    contentType: 'text/html',
    success: () => undefined,
    error: () => undefined,
  };

  _4.extend(finalOptions, options);
    const xhr = new XMLHttpRequest();
    xhr.open(finalOptions.method, finalOptions.url);
    xhr.onload = () => {
      if(xhr.status >= 200 && xhr.status < 300) finalOptions.success(xhr.response);
      else finalOptions.error(xhr.response);
    };
    if(Object.keys(finalOptions.data) !== 0) xhr.send(finalOptions.data);
  };

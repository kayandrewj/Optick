document.addEventListener("DOMContentLoaded", () => {

  _4("body").on("keypress", (e) => {
    let keyCode = e.key.toLowerCase();
    let letter = e.key;
    let virtualKey = `.${e.key}`;

    if (e.code === "Space") {
      addSpace();
    } else if (e.code === "Enter") {
      _4(".input").append("");
    } else {
      addChar(keyCode, letter);
    }

    if (e.code.charAt(0) === "K") {
      addColor(keyCode, virtualKey);
    }
  });

  _4("body").on("keydown", (e) => {
    if (e.code === "Backspace") {
      handleDelete();
    }
  });

  _4(".paste-input").on("keypress", (e) => {
    const clipKeys = [122, 121, 120, 118, 99, 97];
    let charCode = e.which;
    if (e.ctrlKey && clipKeys.indexof(charCode) > -1) {
      return 0;
    }
    let evt = e || window.event;
    let key = evt.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    const regex = /[]|\./;
    if (!regex.test(key)) {
      evt.returnValue = false;
      evt.preventDefault();
    }
  });

  _4(".paste-input-form").on("submit", (e) => {
    e.preventDefault();
    let text = e.target["0"].value;
    constructFromInput(text);
  });

  _4(".reset").on("click", (e) => {
    handleReset();
  });

});

const constructFromInput = (input) => {
  let arr = input.split("");
  arr.forEach(char => {
    window.setTimeout(() => {
      if (char !== " ") {
        addChar(char.toLowerCase(), char);
        if ((/[a-z]/gi).test(char)) {
          virtualKey = char.split();
          virtualKey.unshift(".");
          virtualKey = virtualKey.join("");
          addColor(char.toLowerCase(), virtualKey);
        }
      } else {
        addSpace();
      }
    }, 200);
  });
};

const handleReset = () => {
  let wordCount = _4(".input").children().nodes.length;
  _4(".paste-input").clear();
  index = {};
  _4(".heatrow").children().attr("style", `box-shadow: 0px 0px 9px 0px #212121;`);
  while (wordCount !== 0) {
    handleDelete();
    wordCount -= 1;
  }
};

const handleDelete = () => {
  let children = _4(".input").children();
  let lastChild = children.nodes[children.nodes.length - 1];
  lastChild.remove();
  if (children.nodes.length === 1) {
    addSpace();
  }
};

const addSpace = () => {
  _4(".input").append("<ul class='word'></ul>");
};

const addChar = (keyCode, letter) => {
  if (index[keyCode] === undefined) {
    index[keyCode] = 0;
  } else {
    if (index[keyCode] < 53) {
      index[keyCode] += 1;
    }
  }
  let newChar = document.createElement("li");
  newChar.append(letter);
  newChar.style.color = parseRGBAtoHex(spectrum[index[keyCode]]);
  let children = _4(".input").children();
  let lastChild = children.nodes[children.nodes.length - 1];
  lastChild.append(newChar);
};

const addColor = (keyCode, virtualKey) => {
  _4(virtualKey).attr("style", `box-shadow: 0px 0px 93px 58px ${spectrum[index[keyCode]]};
  background-color:${spectrum[index[keyCode]]}`);
};

const parseRGBAtoHex = (rgba) => {
  let hex = "#";
  nums = rgba.match(/\d{2,3}(?=,|\d)/g);
  nums.forEach(el => {
    el = parseInt(el);
    hex += el.toString(16);
  });
  return hex;
};

let index = {};

let spectrum = [
  "rgba(85, 42, 193, 0.03)",
  "rgba(70, 42, 193, 0.06)",
  "rgba(55, 42, 193, 0.09)",
  "rgba(40, 42, 193, 0.12)",
  "rgba(40, 57, 193, 0.15)",
  "rgba(40, 72, 193, 0.18)",
  "rgba(40, 87, 193, 0.21)",
  "rgba(40, 102, 193, 0.24)",
  "rgba(40, 117, 193, 0.27)",
  "rgba(40, 132, 193, 0.3)",
  "rgba(40, 147, 193, 0.33)",
  "rgba(40, 162, 193, 0.36)",
  "rgba(40, 177, 193, 0.39)",
  "rgba(40, 192, 193, 0.42)",
  "rgba(40, 197, 168, 0.48)",
  "rgba(40, 197, 153, 0.51)",
  "rgba(40, 197, 123, 0.57)",
  "rgba(40, 197, 108, 0.6)",
  "rgba(40, 197, 78, 0.66)",
  "rgba(40, 197, 68, 0.68)",
  "rgba(40, 197, 48, 0.72)",
  "rgba(40, 197, 38, 0.74)",
  "rgba(60, 197, 38, 0.78)",
  "rgba(70, 197, 38, 0.8)",
  "rgba(90, 197, 38, 0.84)",
  "rgba(100, 197, 38, 0.86)",
  "rgba(120, 197, 38, 0.9)",
  "rgba(130, 197, 38, 0.92)",
  "rgba(150, 197, 38, 0.96)",
  "rgba(155, 197, 38, 0.97)",
  "rgba(170, 197, 38, 1)",
  "rgba(180, 197, 38, 1)",
  "rgba(195, 197, 38, 1)",
  "rgba(195, 192, 38, 1)",
  "rgba(195, 182, 38, 1)",
  "rgba(195, 177, 38, 1)",
  "rgba(195, 167, 38, 1)",
  "rgba(195, 162, 38, 1)",
  "rgba(195, 152, 38, 1)",
  "rgba(195, 147, 38, 1)",
  "rgba(195, 137, 38, 1)",
  "rgba(195, 132, 38, 1)",
  "rgba(195, 122, 38, 1)",
  "rgba(195, 117, 38, 1)",
  "rgba(195, 107, 38, 1)",
  "rgba(195, 102, 38, 1)",
  "rgba(195, 92, 38, 1)",
  "rgba(195, 87, 38, 1)",
  "rgba(195, 77, 38, 1)",
  "rgba(195, 72, 38, 1)",
  "rgba(195, 62, 38, 1)",
  "rgba(195, 57, 38, 1)",
  "rgba(195, 52, 38, 1)",
  "rgba(195, 47, 38, 1)",
];

import './style.css'

const text = "We make amazing websites and apps to supercharge your business";
const spans = text.split("").map((char, index) => {
  const el = document.createElement("span");
  el.setAttribute("id", index);
  if (char === " ") {
    el.setAttribute("class", "blank");
  } else {
    el.setAttribute("class", "text");
  }
  el.innerHTML = char;
  return el;
});

document.getElementById("content").append(...spans);

class Lighting {
  constructor(el, index, length) {
    this.el = el;
    this.index = index;
    this.length = length;
    this.inteval = 100;
    this.className = el.className;
    setTimeout(this.start, index * this.inteval);
  }

  start = () => {
    setInterval(this.light, this.length * this.inteval);
    this.light();
  };

  light = () => {
    this.el.setAttribute("class", `${this.className} light`);
    setTimeout(() => {
      this.el.setAttribute("class", this.className);
    }, this.inteval * 6);
  };
}

spans.forEach((span, idx) => new Lighting(span, idx, spans.length));

export { Element, Input, Range, Checkbox };

class Element {
  constructor(query) {
    this.el = document.querySelector(query);
  }
  get text() {
    return this.el.innerText;
  }
  set text(content) {
    this.el.innerText = content;
  }
}

class Input extends Element {
  constructor(query) {
    super(query);
    this.value = this.el.value;
    this.el.addEventListener("input", () => (this.value = this.el.value));
  }
}

class Range extends Input {
  constructor(query, min = 0, max = 100) {
    super(query, min, max);
    this.el.setAttribute("max", max);
    this.el.setAttribute("min", min);
  }

  get max() {
    return this.el.getAttribute("max");
  }
  set max(max) {
    this.el.setAttribute("max", max);
  }

  get min() {
    return this.el.getAttribute("min");
  }
  set min(min) {
    this.el.setAttribute("min", min);
  }

  get step() {
    return this.el.getAttribute("step");
  }
  set step(step) {
    this.el.setAttribute("step", step);
  }
}

class Checkbox extends Input {
  constructor(query) {
    super(query);
    this.checked = false;
    this.el.addEventListener("input", () => {
      this.checked = this.el.checked;
    });
  }
}

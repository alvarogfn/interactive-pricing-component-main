export { Element, Input };

class Element {
  constructor(query) {
    this.el = document.querySelector(query);
  }
  change_text(text) {
    text = text ? text : "100k";
    this.el.innerText = text;
  }
}

class Input extends Element {
  constructor(query) {
    super(query);
    this.el = document.querySelector(query);
    this.value = this.el.value;
    this.el.addEventListener("input", () => (this.value = this.el.value));
  }
}

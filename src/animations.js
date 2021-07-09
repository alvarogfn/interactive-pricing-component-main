import { Element } from "./elements.js";

export { Input_range_progress, Checkbox_button_color };

class Input_range_progress extends Element {
  constructor(query) {
    super(query);
    this.max_value = this.el.getAttribute("max");
    this.value = this.el.value;

    this.el.addEventListener("input", () => {
      this.value = this.el.value;
    });

    this.el.addEventListener("change", () => {
      let percentage = this.calculate_attribute_percentage();
      this.set_attribute(percentage);
    });
  }
  set_attribute(percentage) {
    this.el.style.setProperty("--number", `${percentage}%`);
  }
  calculate_attribute_percentage() {
    let actual_value = (this.value * 100) / this.max_value; //
    return actual_value;
  }
}

class Checkbox_button_color extends Element {
  constructor(query) {
    super(query);
    this.checkbox = new Element(".checkbox");
    this.el.addEventListener("input", () => {
      this.checkbox.el.classList.toggle("checkbox--active");
    });
  }
}

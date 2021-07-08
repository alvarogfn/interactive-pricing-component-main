class Input_range_progress {
  constructor(query) {
    this.el = document.querySelector(query);
    this.max_value = this.el.getAttribute("max");
    this.value = this.el.value;

    this.el.addEventListener("input", () => {
      this.value = this.el.value;
    });

    this.el.addEventListener("input", () => {
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

input_range = new Input_range_progress(".pricing__range");

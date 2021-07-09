export class Controller {
  constructor(input, pageviews, price) {
    this.input = input;
    this.pageviews = pageviews;
    this.price = price;
  }
  change_pageviews_by_range() {
    this.input.el.addEventListener("input", () => {
      this.pageviews.change_text(this.input.value);
    });
  }
  change_price_by_pageviews() {
    this.input.el.addEventListener("change", () => {
      let actual_value = (this.input.el.value * 100) / this.input.el.max;
      let price_by_actual_value = (actual_value * 32) / 100;
      price_by_actual_value = Math.round(price_by_actual_value);
      this.price.el.innerText = price_by_actual_value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    });
  }
}
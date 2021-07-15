import { Element, Input, Range, Checkbox } from "./elements.js";
export class Controller {
  constructor() {
    this.input_range = new Range(".traffic__range");
    this.pageviews = new Element(".traffic__pageviews");
    this.price = new Element(".traffic__price");
    this._price_by_pageviews = 0;
    this.input_button = new Checkbox(".checkbox__box");
    this._discount = 0;
  }

  get price_by_pageviews() {
    return this._price_by_pageviews;
  }
  set price_by_pageviews(price) {
    this._price_by_pageviews = price;
  }

  get discount() {
    return this._discount;
  }
  set discount(value) {
    this._discount = 1 - value / 100;
    this._price_after_discount = this.price_by_pageviews * this.discount;
  }

  change_pageviews_by_range() {
    this.input_range.el.addEventListener("input", () => {
      this.pageviews.text = this.input_range.value;
    });
  }
  change_price_by_pageviews() {
    this.input_range.el.addEventListener("change", () => {
      if (!this.input_button.checked) {
        this.price.text = this.calculate_actual_price(this.price_by_pageviews);
      } else {
        this.price.text = this.calculate_actual_price(
          this._price_after_discount
        );
      }
    });
  }
  chance_price_after_monthly() {
    this.input_button.el.addEventListener("change", () => {
      if (!this.input_button.checked) {
        this.price.text = this.calculate_actual_price(this.price_by_pageviews);
      } else {
        this.price.text = this.calculate_actual_price(
          this._price_after_discount
        );
      }
    });
  }
  calculate_actual_price(price_by_pageviews) {
    let actual_price = this.pageviews.text * price_by_pageviews;
    actual_price = actual_price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    return actual_price;
  }
}

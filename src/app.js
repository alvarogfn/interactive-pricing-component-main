import { Controller } from "./controller.js";
import { Input_range_progress, Checkbox_button_color } from "./animations.js";

let controller = new Controller();

// amount_traffic's input controller
controller.input_range.min = 0;
controller.input_range.max = 200;
controller.input_range.step = 5;

// price by 1k pageviews
controller.price_by_pageviews = 0.16;
controller.discount = 25; // percent

controller.change_pageviews_by_range();
controller.change_price_by_pageviews();
controller.chance_price_after_monthly();

let input_range_animation = new Input_range_progress(".traffic__range");
let checkbox_button_color = new Checkbox_button_color(".checkbox__box");

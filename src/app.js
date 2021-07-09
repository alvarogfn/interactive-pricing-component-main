import { Element, Input } from "./elements.js";
import { Controller } from "./controller.js";
import { Input_range_progress, Checkbox_button_color } from "./animations.js";

let input_range = new Input(".traffic__range");
let pageviews = new Element(".traffic__pageviews");
let price = new Element(".traffic__price");
let controller = new Controller(input_range, pageviews, price);

controller.change_pageviews_by_range();
controller.change_price_by_pageviews();

let input_range_animation = new Input_range_progress(".traffic__range");
let checkbox_button_color = new Checkbox_button_color(".checkbox__box");

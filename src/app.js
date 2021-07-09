import { Element, Input } from "./elements.js";
import { Controller } from "./controller.js";
import { Input_range_progress } from "./animations.js";

let input_range = new Input(".pricing__range");
let pageviews = new Element(".amount__pageviews");
let price = new Element(".amount__price");
let controller = new Controller(input_range, pageviews, price);

controller.change_pageviews_by_range();
controller.change_price_by_pageviews();

let input_range_animation = new Input_range_progress(".pricing__range");

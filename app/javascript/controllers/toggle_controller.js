import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  complete() {
    this.element.classList.toggle("line-through");
  }
}

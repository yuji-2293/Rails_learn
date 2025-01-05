import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    toggle() {
        console.log("Button clicked!");
        this.element.classList.toggle("bg-green-100");
    }
}

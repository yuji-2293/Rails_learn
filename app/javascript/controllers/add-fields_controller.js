import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ["fieldList", "template"];

    addField() {
        const newField = this.templateTarget.content.cloneNode(true);
        this.fieldListTarget.appendChild(newField);
    }

    removeField(event) {
        event.target.closest(".field").remove();
    }
}

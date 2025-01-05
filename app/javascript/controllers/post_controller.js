import { Controller } from "@hotwired/stimulus";
export default class extends Controller {
    static targets = ["nameList", "input"];

    addTodoList(event) {
        event.preventDefault();
        const name = this.inputTarget.value;
        if (name.trim() === "") return;

        const listItem = document.createElement("li");
        listItem.textContent = name;

        this.nameListTarget.appendChild(listItem);
        this.inputTarget.value = ""
    }
}

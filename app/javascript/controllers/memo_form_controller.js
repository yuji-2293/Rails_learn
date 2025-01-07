import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["form"];

  async submit(event) {
    event.preventDefault();

    const formData = new FormData(this.formTarget);

    try {
      const response = await fetch(this.formTarget.action, {
        method: this.formTarget.method,
        headers: { "Accept": "text/vnd.turbo-stream.html" },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

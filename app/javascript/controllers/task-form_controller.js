

import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["form"];

  async submit(event) {
    event.preventDefault(); // デフォルトのフォーム送信をキャンセル

    const formData = new FormData(this.formTarget);

    try {
      const response = await fetch(this.formTarget.action, {
        method: this.formTarget.method,
        headers: {
          "Accept": "text/vnd.turbo-stream.html",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not OK");
      }

      console.log("非同期リクエスト成功");
    } catch (error) {
      console.error("エラー:", error);
    }
  }
}

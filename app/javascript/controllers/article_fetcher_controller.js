import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    async fetchData() {

            const response = await fetch("/articles/fetch_data", {
                headers: {
                    "Accept": "text/vnd.turbo-stream.html",
                },
            });
            if (!response.ok) {
                throw new Error("fetch 失敗！！");
            }
            console.log("fetch 成功!!");
            
        }
    }

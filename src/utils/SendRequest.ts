class HTTPClient {

  static send(method: string, url: string, body: null | Record<string, string> = null) {

    if(!url) {
      url = method
      method = "GET"
    }

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);
      xhr.responseType = "json";
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onload = () => {
        if (xhr.status >= 400) {
          reject(xhr.response);
        } else {
          resolve(xhr.response);
        }
      };

      xhr.onerror = () => {
        reject(new Error("Error occurred during the request"));
      };

      xhr.send(JSON.stringify(body));
    });
  }

  static get(url: string) {
    return this.send("GET", url);
  }

  static post(url: string, body: null | Record<string, string>) {
    return this.send("POST", url, body);
  }

  static put(url: string, body: null | Record<string, string>) {
    return this.send("PUT", url, body);
  }

  static delete(url: string) {
    return this.send("DELETE", url);
  }
}
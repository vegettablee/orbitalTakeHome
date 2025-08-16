export class NetworkAPI {
  constructor() {
    this.baseUrl = "http://localhost:3000/pages";
  }
  async fetchPageStatuses() {
    try {
      let response = await fetch(`${this.baseUrl}/statuses`);
      let statuses = await response.json();
      console.log(statuses);
      return statuses;
    } catch (error) {
      console.log("Error fetching the statuses", error);
      return [];
    }
  }
  // returns as [title, slug, status]

  async fetchPageInformation(slug) {
    try {
      let response = await fetch(`${this.baseUrl}/information/?slugs=${slug}`);
      let pageInformation = await response.json();
      console.log(pageInformation);
      return pageInformation;
    } catch (error) {
      console.log("Error fetching page information", error);
      return [];
    }
  }
  // returns as [slug, title, body]
}

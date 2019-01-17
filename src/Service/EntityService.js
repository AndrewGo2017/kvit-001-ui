class EntityService {
  // static URL = "http://localhost:8889/k001";
  static URL = "https://kvit-001-back.herokuapp.com/k001";

  constructor(entityName) {
    this.entityName = entityName;
  }

  async _fetch(requestType, dataToSend, raw, path) {
    path = path || "";
    path += "/";

    const res = await fetch(EntityService.URL + "/" + this.entityName + path, {
      method: requestType,
      body: dataToSend
    });

    if (res.status !== 200) {
      throw await res.text();
    }

    if (raw) {
      return res;
    } else {
      return await res.json();
    }
  }

  async get() {
    return await this._fetch("GET");
  }

  async getEntries() {
    return Object.entries(await this.get());
  }

  async set(dataToSend) {
    const result = await this._fetch("PUT", dataToSend);
    localStorage.setItem(this.entityName, JSON.stringify(result));
    return result;
  }

  getFromLocalStorage() {
    const dataFromLS = localStorage.getItem(this.entityName);

    if (dataFromLS) {
      return Object.entries(JSON.parse(dataFromLS));
    } else {
      return this.get().then(res => {
        localStorage.setItem(this.entityName, JSON.stringify(res));
        return Object.entries(res);
      });
    }
  }
}

export default EntityService;

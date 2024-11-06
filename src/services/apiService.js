import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:5000/api', // Backend base URL
    });
  }

  get(url) {
    return this.api.get(url).then(response => response.data);
  }

  post(url, data) {
    return this.api.post(url, data).then(response => response.data);
  }

  put(url, data) {
    return this.api.put(url, data).then(response => response.data);
  }

  delete(url) {
    return this.api.delete(url).then(response => response.data);
  }
}

export default new ApiService();

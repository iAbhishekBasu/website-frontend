import http from "../http-common";

class PostDataService {
  getAll() {
    return http.get("/posts/");
  }
  get(id) {
    return http.get(`/posts/${id}`);
  }
  findByTitle(title) {
    return http.get(`/posts?title=${title}`);
  }
}


export default new PostDataService();
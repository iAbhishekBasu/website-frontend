import http from "../http-common";

class FeedbackDataService {
  create(data) {
    return http.post(`/feedbacks/`, data);
  }
}


export default new FeedbackDataService();
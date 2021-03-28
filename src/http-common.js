import axios from "axios";

export default axios.create({
  baseURL: "https://ieeenitdgpbackend.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  },
  withCredentials: false
});

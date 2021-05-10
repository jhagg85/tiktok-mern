import axios from "axios";

const instance = axios.create({
  baseURL: "https://jhagg-tiktok-mern.herokuapp.com/",
});

export default instance;

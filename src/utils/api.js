import axios from "axios";

export default axios.create({
  // for deployment
  baseURL: "https://jsonserve.glitch.me/",

  // for local
  // baseURL: "http://localhost:3500/",
});
import axios from "axios";

export default axios.create({

  // for deployment
  baseURL: "https://blogs-qwux.onrender.com/",

  // for local
  // baseURL: "http://localhost:3500/",
});
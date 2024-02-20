import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "13249a8cd4084ed59070decca416cb4b",
  },
});
//

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6cd37b85bbd34332a957d849dab998f1",
  },
});
//

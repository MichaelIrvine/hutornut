import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID d419374c76936dd4e95b505b3168ae67de0c18b191dcb7e7e387a98cae8ca5dd"
  }
});


// Need to get proper Auth

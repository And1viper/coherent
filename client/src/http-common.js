import axios from "axios";

export default axios.create({
    baseURL: "/api/v1/articles",
    headers: {
        "Content-type": "application/json"
    }
});

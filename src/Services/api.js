import axios from "axios";

export const api = axios.create ({
    baseURL: "https://rocketnotes-api-wgq5.onrender.com"
})
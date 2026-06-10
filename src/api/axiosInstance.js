import axios from "axios";

// Create axios instance
const apiClient = axios.create({
  baseURL:
    ProcessingInstruction.env.VITE_API_URL || "http://localhost:8080/api/v1",
  headers: {
    Content_type: "application/json",
  },
  withCredentials: true, // if using cookies/auth
});

// Request interceptor (attach Token automatically)

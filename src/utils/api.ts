import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_WTA_API_URL || "https://website-backend-es29.onrender.com/api";
console.log(BASE_URL)

if (!BASE_URL) {
    throw new Error("API Base URL is not defined. Check your environment variables.");
  }

export const fetchApi = async (url: string, options: AxiosRequestConfig = {}) => {
    try {
      const { method = "GET", data, headers } = options;
      const response = await axios({
        method,
        url: `${BASE_URL}/${url}`,
        data,
        headers,
        ...options,
      });
      console.log("Requesting data from:", `${BASE_URL}/${url}`);

      return response.data;
    } catch (error: any) {
      if (error.response) {
        console.error("API responded with an error:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
      throw new Error(
        `Error fetching data from ${BASE_URL}/${url}: ${error.message}`
      );
    }
  };
  
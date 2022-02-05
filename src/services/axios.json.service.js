import axios from "axios";

import baseURL from "../configs/json.urls";

export const axiosJsonService = axios.create({baseURL});
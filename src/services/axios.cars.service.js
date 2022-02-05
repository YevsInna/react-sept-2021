import axios from "axios";

import baseURL from "../configs/cars.urls";

export const axiosCarsService = axios.create({baseURL});
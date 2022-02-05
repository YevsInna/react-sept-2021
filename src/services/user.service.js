import {axiosJsonService} from "./axios.json.service";
import {jsonUrls} from "../configs";

export const userService={
    getAll: ()=> axiosJsonService.get(jsonUrls.users).then(value => value.data)
}
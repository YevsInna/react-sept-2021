import {axiosJsonService} from "./axios.json.service";
import {jsonUrls} from "../configs";

export const postService = {
    getAll: ()=> axiosJsonService.get(jsonUrls.posts).then(value => value.data)
}
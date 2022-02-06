import {axiosJsonService} from "./axios.json.service";
import {jsonUrls} from "../configs";

export const commentsService={
    getAll: ()=> axiosJsonService.get(jsonUrls.comments).then(value => value.data)
}
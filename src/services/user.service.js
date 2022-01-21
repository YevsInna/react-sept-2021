import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const userService = {
    getAll: () => axiosService.get(urls.users).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getPostsById: (id) => axiosService.get(`${urls.users}/${id}/posts`).then(value => value.data),
    getAlbumsById: (id) => axiosService.get(`${urls.users}/${id}/albums`).then(value => value.data),
    getPhotosById: (id) => axiosService.get(`${urls.photo}/${id}/photos`).then(value => value.data),

}
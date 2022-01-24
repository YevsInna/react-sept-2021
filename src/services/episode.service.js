import {axiosService} from "./axios.service";

import {urls} from "../configs/urls";

export const episodeService = {
    getAll: ()=> axiosService.get(urls.episode).then(value => value.data),
    getById: (id)=> axiosService.get(`${urls.episode}/${id}`).then(value => value.data)
}


import {axiosService} from "./axios.service";

import {urls} from "../configs/urls";

export const characterService = {
    getCharacterById:(id) => axiosService.get(`${urls.character}/${id}`).then(value => value.data)
}


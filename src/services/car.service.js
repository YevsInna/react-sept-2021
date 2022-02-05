import {axiosCarsService} from "./axios.cars.service";
import {carsUrls} from "../configs";

export const carService = {
    getAll: () => axiosCarsService.get(carsUrls.cars).then(value => value.data),
    deleteById: (id) => axiosCarsService.delete(`${carsUrls.cars}/${id}`),
    create: (car) => axiosCarsService.post(`${carsUrls.cars}`, car).then(value => value.data),
    updateById:(id,car)=>axiosCarsService.patch(`${carsUrls.cars}/${id}`, car).then(value =>value.data),
}
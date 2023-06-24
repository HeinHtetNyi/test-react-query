import apiClient from "./api-client";

export default class SuperHerosServices {
    public static getSuperHerosData() {
        return apiClient.get('/superheros').then(res => res.data)
    }
}
import apiClient from "./api-client";

export default class TodoServices {
    public static getTodoList() {
        return apiClient.get('/todos')
    }
}
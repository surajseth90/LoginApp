import AxiosService from './axios-service';

const baseUrl = "http://localhost:8080/app";
export default class UserDataService {

    addUserData(data) {
        return AxiosService.postService(`${baseUrl}/create`, data);
    }
    getUserData() {
        return AxiosService.getService(`${baseUrl}/get`);
    }
    getUserDataByEmailId(email) {
        return AxiosService.getService(`${baseUrl}/get/${email}`,id);
    }
    updateUserData(data) {
        return AxiosService.putService(`${baseUrl}/update/${data.id}`, data);
    }  
}
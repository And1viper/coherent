import http from "../http-common-contact";

class ContactDataService {
    sendForm(data) {
        return http.post('/', data);
    }
}

export default new ContactDataService();
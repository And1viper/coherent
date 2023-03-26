import http from "../http-common";

class ArticleDataService {
    getAll(page = 0) {
        return http.get(`?page=${page}`);
    }

    get(id) {
        return http.get(`/id/${id}`);
    }

    createArticle(data) {
        return http.post('/manage', data);
    }

    deleteArticle(id){
        return http.delete(`/manage?id=${id}`)
    }

    sendLogin(data) {
        return http.post('/login', data);
    }
}

export default new ArticleDataService();
import axios from 'axios';

const base_URL = "https://cors-anywhere.herokuapp.com/https://perludilindungi.herokuapp.com/api";

class ListBeritaService {
    getListBerita(listBerita){
        return axios.get(base_URL + listBerita);
    }

    createListBerita(listBerita, state){
        return axios.post(base_URL + listBerita, state);
    }

    getListBeritaById(listBeritaId) {
        return axios.get(base_URL + listBeritaId);
    }

    updateListBerita(listBerita, state) {
        return axios.put(base_URL + listBerita, state);
    }

    deleteListBerita(listBeritaId) {
        return axios.delete(base_URL + listBeritaId)
    }
}

export default new ListBeritaService()
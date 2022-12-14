import axios from 'axios';

const base_URL = "http://localhost:8090/v1/articles";

class ArtikelService {
    getArtikel(){
        return axios.get(base_URL);
    }

    createArtikel(state){
        return axios.post(base_URL, state);
    }

    getArtikelById(artikelId) {
        return axios.get(base_URL + artikelId);
    }

    updateArtikel(state) {
        return axios.put(base_URL, state);
    }

    deleteArtikel(artikelId) {
        return axios.delete(base_URL + artikelId)
    }
}

export default new ArtikelService()
import axios from "axios";
import filterParams from "./filterParams";

export default {
    getUsers: function() {
        return axios.get("/api/pets");
    },
    saveUser: function(userData) {
        return axios.post("/api/users", userData);
    },
    getPets: function() {
        return axios.get("/api/pets");
    },
    
    savePets: function(petData) {
        return axios.post("/api/pets", petData);
    },
    getArticles: function(params) {
        return axios.get("/api/nyt", { params: filterParams(params) });
    }
};

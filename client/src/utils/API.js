import axios from "axios";

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



}


};
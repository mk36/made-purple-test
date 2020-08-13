import axios from "axios";
export default class feedService {

    getBreeds(){
        //api key
        // 80abfb87-b027-46a9-a24a-81eff9736a4f

        return new Promise(function (resolve, reject) {
            axios.get('https://api.thecatapi.com/v1/breeds').then(function (result) {
                resolve(result.data);
            }).catch(function (error) {
                reject(error.response);
            })
        });
    }

    getRandomCats(page = 1, breedId = ''){
        return new Promise(function (resolve, reject) {
            axios.get('https://api.thecatapi.com/v1/images/search?limit=24&page=' + page + '&order=Desc&breed_id=' + breedId).then(function (result) {
                resolve(result.data);
            }).catch(function (error) {
                reject(error.response);
            })
        });
    }

    getBreedById(breeds, id){
        for(let i = 0; i < breeds.length; i++){
            if(breeds[i].id === id){
                return breeds[i];
            }
        }

        return null;
    }
}

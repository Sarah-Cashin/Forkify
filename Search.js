import axios from 'axios';
// import {key, proxy} from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${'query'}`);
        this.result = res.data.recipes;
        // console.log(this.result);
    } catch (error) {
        alert(error);
    }
}
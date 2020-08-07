import axios from 'axios';
import {
    proxy,
    key
} from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getRecipes() {
        try {
            const res = await axios(`${proxy}https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${this.query}&number=100&addRecipeInformation=true`);
            this.recipes = res.data.results;
        } catch (error) {
            alert(error);
        }
    }
}
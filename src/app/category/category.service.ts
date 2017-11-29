import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

    constructor(private http: Http){}

    getCategoryFromService() {
        return this.http.get('http://localhost:3000/api/category')
        .map(function(response){
            return response.json()
        })
    }

    deleteCategoryService(id) {
        return this.http.delete('http://localhost:3000/api/deleteCategory/' + id)
        .map(function(response){
            return response.json()
        })
    }

    editCategoryService(obj) {
        return this.http.put('http://localhost:3000/api/editCategory', obj)
        .map(function(response){
            return response.json()
        })
    }

    addCategoryService(obj) {
        return this.http.post('http://localhost:3000/api/addCategory', obj)
        .map(function(response){
            return response.json()
        })
    }
    
}
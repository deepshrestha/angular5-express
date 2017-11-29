import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

    CATEGORY_ITEMS: Observable<any>;
    
    constructor(private categoryService: CategoryService) {}

    ngOnInit(){
        this.getCategoryItems();
    }    

    getCategoryItems(){
        this.CATEGORY_ITEMS = this.categoryService.getCategoryFromService();
    }

    showEditForm: boolean = false;
    editItems = {};

    editCategory(obj){
        this.showEditForm = true;
        this.editItems = obj;
    }

    saveCategory(formValue) {
        this.CATEGORY_ITEMS = this.categoryService.editCategoryService(formValue);
        this.showEditForm = false;
    }

    deleteCategory(id){
        this.CATEGORY_ITEMS = this.categoryService.deleteCategoryService(id);
    }

    showAddForm: boolean = false;
    showAddCatForm() {
        this.showAddForm = true;
    }
}

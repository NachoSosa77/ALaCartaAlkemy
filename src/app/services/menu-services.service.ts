import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuServicesService {

  ApiUrl :string = "https://api.spoonacular.com/recipes/complexSearch"

  constructor(private http:HttpClient) { }

  getAllRecipes(){
    
  }
}

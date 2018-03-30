import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
	categories : any;
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
	  
	  this.firebaseService.getCategories().subscribe(categories =>{
		  console.log(categories);
		  this.categories = categories;
	  });
  }

}

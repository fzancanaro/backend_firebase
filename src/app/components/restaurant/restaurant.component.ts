import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurants : any;
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
	  
	  this.firebaseService.getRestaurants().subscribe(restaurants =>{
		  console.log(restaurants);
		  this.restaurants = restaurants;
	  });
  }

}

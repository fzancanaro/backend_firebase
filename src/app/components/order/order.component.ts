import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders : any;
 
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
	  //GET ALL ORDERS NO MATTER WHAT RESTAURANT OWNER
	  /**
	  this.firebaseService.getOrders().subscribe(orders =>{
		  console.log(orders);
		  this.orders = orders;
	  });
	  */
	  
	  this.firebaseService.getOrders().subscribe(orders =>{
		  console.log(orders);
		  this.orders = orders.reverse();
	  });
  }

}

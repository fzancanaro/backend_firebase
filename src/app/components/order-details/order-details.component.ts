import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  	order_id:any;
	order_details:any;

  constructor(
  private firebaseService : FirebaseService,
	private router: Router,
	private route: ActivatedRoute
	) { }

  ngOnInit() {
	  this.order_id = this.route.snapshot.params['order_id'];
	  console.log(this.order_id);
	  
	  this.firebaseService.getOrderDetails(this.order_id).subscribe(order_details => {
      this.order_details = order_details;

    });
	  
  }
  
	
 

}

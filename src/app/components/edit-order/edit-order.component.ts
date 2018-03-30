import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  	order_id:any;
	order_details:any;
	status:any;
	checked:any;
	

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
  
  onStatusOrderSubmit(){
	  
	   let order_details= {
		  status : this.status,
		  checked : ""
		  
	  }
	  
	  this.firebaseService.updateOrderStatus(this.order_id,order_details);
	  
	  this.router.navigate(['/orders']);
	  
  }

}

import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items : any;
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
	  
	  this.firebaseService.getItems().subscribe(items =>{
		  this.items = items;
	  });
  }

}

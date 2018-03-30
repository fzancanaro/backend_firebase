import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any>;
  
  restaurants: FirebaseListObservable<any[]>;
  restaurant: FirebaseObjectObservable<any>;
  
  categories:FirebaseListObservable<any[]>;
  category_details:FirebaseObjectObservable<any>;
  
  items:FirebaseListObservable<any[]>;
  item_details:FirebaseObjectObservable<any>;
  
  orders:FirebaseListObservable<any[]>;
  order_details:FirebaseObjectObservable<any>;
  
  folder: any;
  itemFolder: any;
  restaurantFolder: any;
  categoryFolder: any;
  

  constructor(private af: AngularFire) {
	this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listing[]>;
	this.restaurants = this.af.database.list('/restaurants') as FirebaseListObservable<Listing[]>;
	this.categories = this.af.database.list('/category') as FirebaseListObservable<Category[]>;
	this.items = this.af.database.list('/items') as FirebaseListObservable<Item[]>;
	this.orders = this.af.database.list('/orders') as FirebaseListObservable<Order[]>;
    this.folder = 'listingimages';
	this.itemFolder = 'itemimages';
	this.restaurantFolder = 'restaurantimages';
	this.categoryFolder = 'categoryimages';
  }
  
  getRestaurants(){
    
    return this.restaurants;
  }
  
  getOrders(){
    
    return this.orders;
  }
  
  getOrderDetails(id){
	
    //this.restaurant = this.af.object('users/' + uid + '/restaurants/'+id) as FirebaseObjectObservable<Restaurant>
	this.order_details = this.af.database.object('/orders/'+id) as FirebaseObjectObservable<Order>
    return this.order_details;  
	  
  }
  
  updateOrderStatus(id,order_details){
	  //private items = this.af.list('listings');
      //items.update(category);
	  return this.orders.update(id,order_details);
	  
  }
  
  addRestaurant(restaurant){
	 
	  
	let storageRefItem = firebase.storage().ref();
    for(let selectedItemFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){

	  //let path = '/${this.folder}/${selectedFile.name}';
      let pathItem = `/${this.restaurantFolder}/${selectedItemFile.name}`;
      let iRefItem = storageRefItem.child(pathItem);
      iRefItem.put(selectedItemFile).then((snapshot) => {
        restaurant.image = pathItem;
		
			  let storageRef = firebase.storage().ref();
			  let spaceRef = storageRef.child(restaurant.image);
			  
			  console.log(restaurant.image);
			  storageRef.child(restaurant.image).getDownloadURL().then((url) => {
				// Set image url
				console.log(url);
	
	
				restaurant.firebase_url=url;
				
				return this.restaurants.push(restaurant);
			
			  }).catch((error) => {
				console.log(error);
			  });
		

       // return this.restaurants.push(restaurant);  
      });
    }
	  
	  
  }
  
  
  getRestaurantDetails(id){
    this.restaurant = this.af.database.object('/restaurants/'+id) as FirebaseObjectObservable<Restaurant>
    return this.restaurant;
  }
  
   deleteRestaurant(id){
	  //private items = this.af.database.list('listings');
      //items.remove(category);
	return this.restaurants.remove(id);
	
  }
  
  
  
   updateRestaurant(id,restaurant){
	  //private items = this.af.database.list('listings');
      //items.update(category);
	  return this.restaurants.update(id,restaurant);
	  
  }
  

  getListings(){
    
    return this.listings;
  }

  getListingDetails(id){
    this.listing = this.af.database.object('/listings/'+id) as FirebaseObjectObservable<Listing>
    return this.listing;
  }
  
 
  
  addListing(listing){
    // Create root ref
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){

	  //let path = '/${this.folder}/${selectedFile.name}';
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        listing.image = selectedFile.name;
        listing.path = path;
        return this.listings.push(listing);
      });
    }
  }
  
  updateListing(id,listing){
	  //private items = this.af.database.list('listings');
      //items.update(category);
	  return this.listings.update(id,listing);
	  
  }
  
    deleteListing(id){
	  //private items = this.af.database.list('listings');
      //items.remove(category);
	return this.listings.remove(id);
	
  }
  
   addCategory(category){
	  
	  //private items = this.af.database.list('category');
      //items.push(category);
	  
	  let storageRefItem = firebase.storage().ref();
    for(let selectedItemFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){

	  //let path = '/${this.folder}/${selectedFile.name}';
      let pathItem = `/${this.categoryFolder}/${selectedItemFile.name}`;
      let iRefItem = storageRefItem.child(pathItem);
      iRefItem.put(selectedItemFile).then((snapshot) => {
        category.image = pathItem;
		
			  let storageRef = firebase.storage().ref();
			  let spaceRef = storageRef.child(category.image);
			  
			  console.log(category.image);
			  storageRef.child(category.image).getDownloadURL().then((url) => {
				// Set image url
				console.log(url);
	
	
				category.firebase_url=url;
				
				return this.categories.push(category);
			
			  }).catch((error) => {
				console.log(error);
			  });
		

       // return this.restaurants.push(restaurant);  
      });
    }
	  
	 // return this.categories.push(category);
	  
	  
  }
  
  updateCategory(id,category){
	  //private items = this.af.database.list('listings');
      //items.update(category);
	  return this.categories.update(id,category);
	  
  }
  
   getCategories(){
    this.categories = this.af.database.list('/category') as FirebaseListObservable<Category[]>
    return this.categories;
  }

  getCategoryDetails(cat_id){
	this.category_details = this.af.database.object('/category/'+cat_id) as FirebaseObjectObservable<Category>
    return this.category_details;
	  
  }
  
  
  

  
  deleteCategory(id){
	  //private items = this.af.database.list('listings');
      //items.remove(category);
	return this.categories.remove(id);
	
  }
  
  
  
 
  
  getItems(){
	  return this.items;
	  
  }
  
  addItem(item){
	  
	  let storageRefItem = firebase.storage().ref();
    for(let selectedItemFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){

	  //let path = '/${this.folder}/${selectedFile.name}';
      let pathItem = `/${this.itemFolder}/${selectedItemFile.name}`;
      let iRefItem = storageRefItem.child(pathItem);
      iRefItem.put(selectedItemFile).then((snapshot) => {
        item.image = pathItem;
		
			  let storageRef = firebase.storage().ref();
			  let spaceRef = storageRef.child(item.image);
			  
			  console.log(item.image);
			  storageRef.child(item.image).getDownloadURL().then((url) => {
				// Set image url
				console.log(url);
	
	
				item.image_firebase_url=url;
				
				return this.items.push(item);
			
			  }).catch((error) => {
				console.log(error);
			  });
		
        //return this.items.push(item);  
      });
    }
	
  }

	getItemDetails(id){
		
		this.item_details = this.af.database.object('/items/'+id) as FirebaseObjectObservable<Item>
		return this.item_details;
	}  
  
  updateItem(id,item){
	  //private items = this.af.database.list('listings');
      //items.update(category);
	  return this.items.update(id,item);
	  
  }
  
  deleteItem(id){
	  //private items = this.af.database.list('listings');
      //items.remove(category);
	return this.items.remove(id);
	
  }
  

}


interface Listing{
  $key?:string;
  title?:string;
  type?:string;
  image?:string;
  city?:string;
  owner?:string;
  bedrooms?:string;
  path?:any;
}

interface Restaurant{
  $key?:string;
  address?:string;
  description?:string;
  image?:string;
  info?:string;
  lat?:string;
  long?:string;
  mark?:string;
  option?:string;
  outlet?:string;
  phonenumber?:string;
  title?:string;
  firebase_url?:string;
  img?:string;
}

interface Category{
  $key?:string;
  cat_id?:string;
  cat_name?:string;
  res_name?:string;
  image?:string;
  firebase_url?:string;
}


interface Item{
  $key?:string;
  available?:string;
  category?:string;
  description?:string;
  image?:string;
  name?:string;
  price?:string;
  stock?:string;
  categories?:string;
  percent?:string;
  image_firebase_url?:string;
}


interface Order{
  $key?:string;
  address_id?:string;
  created?:string;
  item_qty?:string;
  order_date_time?:string;
  payment_id?:string;
  product_firebase?:string;
  product_id?:string;
  product_image?:string;
  product_price?:string;
  product_total_price?:string;
  restaurant_id?:string;
  restaurant_name?:string;
  status?:string;
  user_id?:string;
  user_name?:string;
  restaurant_owner_id?:string;
  checked?:string;
}



/* import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

 listings: FirebaseListObservable<any[]>;
 listing: FirebaseObjectObservable<any[]>;
 folder:any;
 

  constructor(private af: AngularFire) { 
	this.folder = 'listingImages';
  }
  
  getListings(){
	  
	  this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listing[]>;
	  return this.listings;
  }
  
  getListingDetails(id){
	  
	  this.listing = this.af.database.object('/listings/' + id) as FirebaseObjectObservable<Listing>;
	  return this.listing;
	  
  }
  
  addListing(listing){
	  let storageRef = firebase.storage().ref(); 
	  
	  for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
		  
		  let path = '/${this.folder}/${selectedFile.name}';
		  let iRef = storageRef.child(path);
		  iRef.put(selectedFile).then((snapshot) => {
			 listing.image = selectedFile.name;
			 listing.path = path;
			 return this.listings.push(listing);
		  });
	  }
	  
  }

}

interface Listing{
	$key?:string;
	title?:string;
	type?:string;
	image?:string;
	city?:string;
	owner?:string;
	bedrooms?:string;
	
	
}
 */
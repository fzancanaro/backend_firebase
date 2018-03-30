import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router'
import { AngularFireModule,AuthProviders, AuthMethods  } from 'angularfire2';
import {FirebaseService} from './services/firebase.service';
import {FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { ItemComponent } from './components/item/item.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { EditRestaurantComponent } from './components/edit-restaurant/edit-restaurant.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { RestaurantCategoryComponent } from './components/restaurant-category/restaurant-category.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { EditOrderComponent } from './components/edit-order/edit-order.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCHwVZgqBVlDWmsOY69YWJsFFcSHofzcBU",
    authDomain: "myparktest-8f995.firebaseapp.com",
    databaseURL: "https://myparktest-8f995.firebaseio.com",
    projectId: "myparktest-8f995",
    storageBucket: "",
    messagingSenderId: "476323954823"

};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const appRoutes : Routes = [
	{path:'',component:HomeComponent},
	{path:'listings',component:ListingsComponent},
	{path:'listing/:id',component:ListingComponent},
	{path:'add-listing',component:AddListingComponent},
	{path:'edit-listing/:id',component:EditListingComponent},
	
	{path:'category',component:CategoryComponent},
	{path:'category-details/:cat_id',component:CategoryDetailsComponent},
	{path:'add-category',component:AddCategoryComponent},
	{path:'edit-category/:cat_id',component:EditCategoryComponent},
	
	{path:'items',component:ItemComponent},
	{path:'add-item',component:AddItemComponent},
	{path:'item-details/:id',component:ItemDetailsComponent},
	{path:'edit-item/:id',component:EditItemComponent},
	
	{path:'restaurants',component:RestaurantComponent},
	{path:'add-restaurant',component:AddRestaurantComponent},
	{path:'restaurant-details/:id',component:RestaurantDetailsComponent},
	{path:'edit-restaurant/:id',component:EditRestaurantComponent},
	
	{path:'orders',component:OrderComponent},
	{path:'order-details/:order_id',component:OrderDetailsComponent},
	{path:'edit-order/:order_id',component:EditOrderComponent},
	
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent,
    CategoryComponent,
    CategoryDetailsComponent,
    AddCategoryComponent,
    ItemComponent,
    AddItemComponent,
    ItemDetailsComponent,
    EditCategoryComponent,
    EditItemComponent,
    RestaurantComponent,
    AddRestaurantComponent,
    EditRestaurantComponent,
    RestaurantDetailsComponent,
    RestaurantCategoryComponent,
    OrderComponent,
    OrderDetailsComponent,
    EditOrderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	FlashMessagesModule,
	RouterModule.forRoot(appRoutes),
	AngularFireModule.initializeApp(firebaseConfig,firebaseAuthConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

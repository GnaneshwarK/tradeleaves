import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';

import {ProductsService} from "../../services/products.service"
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productForm: FormGroup;
  isSubmitted  =  false;
  p: number = 1;
 productList:any;
hideRemove=false;
  constructor(private productsService:ProductsService,private formBuilder: FormBuilder ) { }

  ngOnInit(): void {

    this.productForm  =  this.formBuilder.group({
      productName: ['', Validators.required],
      Material: ['', Validators.required],
      Color: ['', Validators.required],
      Brand: ['', Validators.required],
   //   attributes: [{'Material':'','Color':'','Brand':''}, Validators.required],

      image:['', Validators.required],
      minOrders:['', Validators.required],
      deliveryTime:['', Validators.required],
      location:['', Validators.required],
      productRating:['', Validators.required],
      productPrice:['', Validators.required]

  });


  /*  this.productsService.getProducts()
    .subscribe(res => {
      console.log(res);
      let result=res;
      this.productList = result;
    });*/

 //  this.productList=this.productsService.getProducts();
 let prod=JSON.parse(localStorage.getItem("productslist"));
 this.productList=prod.reverse();
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var close = document.getElementById("close");

btn.onclick = function() {
  modal.style.display = "block";
}

close.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

  }

  get formControls() { return this.productForm.controls; }
  remove(){
    this.hideRemove=!this.hideRemove;
  }

  save(){

    console.log(this.productForm.value);
    this.isSubmitted = true;
    if(this.productForm.invalid){
      return;
    }
  else{

   let product= {
      "productName":this.productForm.value.productName,
      "attributes": {
        "Material":this.productForm.value.Material,
        "Color": this.productForm.value.Color,
        "Brand":this.productForm.value.Brand
      },
      "image": this.productForm.value.image,
      "minOrders":this.productForm.value.minOrders,
      "deliveryTime": this.productForm.value.deliveryTime,
      "location": this.productForm.value.location,
      "productRating": this.productForm.value.productRating,
      "productPrice": this.productForm.value.productPrice
    }
    console.log(product)
    this.productsService.saveProduct(product)
  //  this.productList=JSON.parse(localStorage.getItem("productslist"))
    this.productList=this.productsService.getProducts();
    document.getElementById("myModal").style.display = "none";
  }
  }
  removeproduct(item){
   let prod= this.removeByAttr(this.productList,"productName",item.productName)
   console.log(prod)
    this.productList=prod;  
  }
  removeByAttr = function(arr, attr, value){
    var i = arr.length;
    while(i--){
       if( arr[i] 
           && arr[i].hasOwnProperty(attr) 
           && (arguments.length > 2 && arr[i][attr] === value ) ){ 

           arr.splice(i,1);

       }
    }
    return arr;
}
}

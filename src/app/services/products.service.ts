import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from "../models/product"
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

products:Product[]=[]



  constructor(private httpService: HttpClient) {
    this.products=[
      {
        "productName": "Royaloak Furniture Kukatpally",
        "attributes": {
          "Material": "Fabric",
          "Color": "Brown",
          "Brand": "Coaster Home Furnishings"
        },
        "image": "https://i.postimg.cc/TP7Q0B9P/image-1.jpg",
        "minOrders": "200",
        "deliveryTime": "1 - 2 weeks",
        "location": "Hyderabad, India",
        "productRating": "4.2",
        "productPrice": "20125"
      },
      {
        "productName": "Anu Furniture International Mall",
        "attributes": {
          "Material": "Fabric",
          "Color": "Brown",
          "Brand": "Coaster Home Furnishings"
        },
        "image": "https://i.postimg.cc/FzcZ9zQf/image-2.jpg",
        "minOrders": "200",
        "deliveryTime": "1 - 3 weeks",
        "location": "Hyderabad, India",
        "productRating": "3.2",
        "productPrice": "30125"
      },
      {
        "productName": "IKEA Store",
        "attributes": {
          "Material": "Fabric",
          "Color": "Brown",
          "Brand": "Coaster Home Furnishings"
        },
        "image": "https://i.postimg.cc/26gGRvgR/photo-1505691938895-1758d7feb511.jpg",
        "minOrders": "200",
        "deliveryTime": "1 - 3 weeks",
        "location": "Hyderabad, India",
        "productRating": "2.2",
        "productPrice": "10125"
      },{
        "productName": "Tirumala Furnitures",
        "attributes": {
          "Material": "Fabric",
          "Color": "Brown",
          "Brand": "Coaster Home Furnishings"
        },
        "image": "https://i.postimg.cc/59HK79DW/photo-1519710164239-da123dc03ef4.jpg",
        "minOrders": "200",
        "deliveryTime": "1 - 2 weeks",
        "location": "Hyderabad, India",
        "productRating": "4.2",
        "productPrice": "50125"
      },{
        "productName": "MR Furnitures",
        "attributes": {
          "Material": "Fabric",
          "Color": "Brown",
          "Brand": "Coaster Home Furnishings"
        },
        "image": "https://i.postimg.cc/ZqKVrJ6g/photo-1522708323590-d24dbb6b0267.jpg",
        "minOrders": "200",
        "deliveryTime": "1 - 4 weeks",
        "location": "Hyderabad, India",
        "productRating": "4.2",
        "productPrice": "80125"
      },{
        "productName": "Studio Pepperfry - Furniture Store ",
        "attributes": {
          "Material": "Fabric",
          "Color": "Brown",
          "Brand": "Coaster Home Furnishings"
        },
        "image": "https://i.postimg.cc/0yCVMzKD/photo-1533044309907-0fa3413da946.jpg",
        "minOrders": "200",
        "deliveryTime": "1 - 2 weeks",
        "location": "Hyderabad, India",
        "productRating": "4.2",
        "productPrice": "90125"
      },{
        "productName": "Siva Gayatri Furniture",
        "attributes": {
          "Material": "Fabric",
          "Color": "Brown",
          "Brand": "Coaster Home Furnishings"
        },
        "image": "https://i.postimg.cc/fy4cgs0M/photo-1547340964-f765a5906c59.jpg",
        "minOrders": "200",
        "deliveryTime": "1 - 2 weeks",
        "location": "Hyderabad, India",
        "productRating": "4.2",
        "productPrice": "70125"
      },{
        "productName": "Hyderabad cane furniture",
        "attributes": {
          "Material": "Fabric",
          "Color": "Brown",
          "Brand": "Coaster Home Furnishings"
        },
        "image": "https://i.postimg.cc/261GKTc7/photo-1554995207-c18c203602cb.jpg",
        "minOrders": "200",
        "deliveryTime": "1 - 2 weeks",
        "location": "Hyderabad, India",
        "productRating": "4.2",
        "productPrice": "80125"
      },{
        "productName": "Mega Furniture",
        "attributes": {
          "Material": "Fabric",
          "Color": "Brown",
          "Brand": "Coaster Home Furnishings"
        },
        "image": "https://i.postimg.cc/c1V9VyNg/photo-1556020685-ae41abfc9365.jpg",
        "minOrders": "200",
        "deliveryTime": "1 - 2 weeks",
        "location": "Hyderabad, India",
        "productRating": "4.2",
        "productPrice": "30125"
      },{
        "productName": "A.K. Furniture Shop",
        "attributes": {
          "Material": "Fabric",
          "Color": "Brown",
          "Brand": "Coaster Home Furnishings"
        },
        "image": "https://i.postimg.cc/Qx14D4X6/photo-1586105251261-72a756497a11.jpg",
        "minOrders": "200",
        "deliveryTime": "1 - 2 weeks",
        "location": "Hyderabad, India",
        "productRating": "4.2",
        "productPrice": "40125"
      },{
        "productName": "Lifestyle Furniture",
        "attributes": {
          "Material": "Fabric",
          "Color": "Brown",
          "Brand": "Coaster Home Furnishings"
        },
        "image": "https://i.postimg.cc/QCss0pz6/image11.jpg",
        "minOrders": "200",
        "deliveryTime": "1 - 2 weeks",
        "location": "Hyderabad, India",
        "productRating": "4.2",
        "productPrice": "80125"
      },{
        "productName": "Shri Ambica Furniture & Interios",
        "attributes": {
          "Material": "Fabric",
          "Color": "Brown",
          "Brand": "Coaster Home Furnishings"
        },
        "image": "https://i.postimg.cc/y6wr41YH/image12.jpg",
        "minOrders": "200",
        "deliveryTime": "1 - 2 weeks",
        "location": "Hyderabad, India",
        "productRating": "4.2",
        "productPrice": "90125"
      },{
        "productName": "Jagunu Furniture",
        "attributes": {
          "Material": "Fabric",
          "Color": "Brown",
          "Brand": "Coaster Home Furnishings"
        },
        "image": "https://i.postimg.cc/8CKtyDnx/images13.jpg",
        "minOrders": "200",
        "deliveryTime": "1 - 2 weeks",
        "location": "Hyderabad, India",
        "productRating": "4.2",
        "productPrice": "40125"
      },{
        "productName": "Merchant logoThe Antique Loft Hyderabad",
        "attributes": {
          "Material": "Fabric",
          "Color": "Brown",
          "Brand": "Coaster Home Furnishings"
        },
        "image": "https://i.postimg.cc/sgKcXsy1/image14.jpg",
        "minOrders": "200",
        "deliveryTime": "1 - 2 weeks",
        "location": "Hyderabad, India",
        "productRating": "4.2",
        "productPrice": "50125"
      },{
        "productName": "Featherlite Furniture Hyderabad",
        "attributes": {
          "Material": "Fabric",
          "Color": "Brown",
          "Brand": "Coaster Home Furnishings"
        },
        "image": "https://i.postimg.cc/fTn5q8BW/image15.jpg",
        "minOrders": "200",
        "deliveryTime": "1 - 2 weeks",
        "location": "Hyderabad, India",
        "productRating": "4.2",
        "productPrice": "70125"
      }
    ]
  //  localStorage.setItem("productslist",JSON.stringify(this.products))
   }

  getProducts() {
    //return this.httpService.get('https://run.mocky.io/v3/ab3b4d8d-a7f9-4861-9e86-ff4f8eb6b474');
    return this.products.reverse();
  }

  saveProduct(product:Product){
    this.products.push(product)
    localStorage.setItem("productslist",JSON.stringify(this.products))

  }

}

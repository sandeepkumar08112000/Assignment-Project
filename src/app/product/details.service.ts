import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  productList = [{
    id: 1,
    name: 'Nokia 5.1 plus',
    description: '160g, 8.1mm thickness Android 8.1, up to Android 10, Android One  32GB/64GB storage, microSDXC',
    price: 8999,
    image:'/assets/nokia.jpg'
  },
  {
    id: 2,
    name: 'Samsung A10s',
    description: '168g, 7.8mm thickness Android 9.0, up to Android 11, One UI 3.1 32GB storage, microSDXC',
    price: 10999,
    image:'/assets/samsung.jpg'
  },
  {
    id: 3,
    name: 'Redmi Note5 pro',
    description: "181g, 8.1mm thickness Android 7.1.2, planned upgrade to 10, MIUI 12 64GB storage, microSDX",
    price: 12999,
    image:'/assets/redmi.jpg'
  },
  {
    id: 4,
    name: 'Vivo Y2',
    description: "190.5g, 8.9mm thickness Android 9.0, Funtouch 9 32GB/64GB storage, microSDXC",
    price: 9500,
    image:'/assets/vivo.jpg'
  }];
  constructor() { }
}

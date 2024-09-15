import { Component,OnInit } from '@angular/core';
import { product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: product[] = [{
    id: 1,
    name: 'Nokia 5.1 Plus',
    price: 8999
  },
  {
    id: 2,
    name: 'Samsung A10s',
    price: 10999
  },
  {
    id: 3,
    name: 'Redmi Note 5Pro',
    price: 12999
  },
  {
    id: 4,
    name: 'Vivo Y2',
    price: 9500
  }];
  constructor(){}
  ngOnInit(): void {
  }
}

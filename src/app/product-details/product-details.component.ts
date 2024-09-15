import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from '../product/details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  product: any;
  constructor(private activatedroute: ActivatedRoute, private srevice: DetailsService) { }
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      this.product = this.srevice.productList.find(list => list.id == this.productId);
    })
  }
}

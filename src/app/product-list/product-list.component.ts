import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.products = [];
  }

  ngOnInit() {
    this._httpService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(product) {
    this._httpService.deleteProduct(product._id).subscribe(deletedProduct => {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i]._id === product._id) {
          this.products.splice(i, 1);
        }
      }
    });
  }
}

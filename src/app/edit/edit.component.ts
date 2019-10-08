import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.product = {};
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this._httpService.getProduct(params['id']).subscribe(product => {
        this.product = product;
      });
    });
  }

  updateProduct() {
    this._httpService.updateProduct(this.product).subscribe(product => {});
    this._router.navigate(['/product']);
  }
}

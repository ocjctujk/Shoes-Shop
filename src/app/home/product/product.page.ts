import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Product } from 'src/app/shared/product.model';
import { ShoesService } from 'src/app/shared/shoes.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  loadedProduct: Product;
  id;
  constructor(private route: ActivatedRoute,private alertCtrl: AlertController,private shoeService: ShoesService) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('product');
    console.log(this.id);
    this.loadedProduct = this.shoeService.getShoe(this.id);
  }

  

}

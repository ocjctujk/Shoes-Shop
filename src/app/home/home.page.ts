import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../shared/product.model';
import { ShoesService } from '../shared/shoes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  products: Product[] = [];
  constructor(private router: Router,private shoesService: ShoesService) {}

  ngOnInit(): void {
    this.shoesService.shoesSubject.subscribe(shoesData=>{
      this.products = shoesData;
    })
  }


  onClick(id: string) {
    console.log(id);
    this.router.navigate(['home',id]);
  }
}

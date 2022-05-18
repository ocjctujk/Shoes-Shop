import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ShoesService {
  private _shoes: Product[] = [
    new Product(
      Math.random().toString(),
      'Air Max 90 G',
      'Nike',
      150,
      20,
      ['red', 'blue'],
      ['8', '10', '12'],
      [
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/08f113fb-396f-4445-a89b-f82752a7cb82/air-max-90-g-golf-shoe-qlD3wL.png',
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6cb1c1da-5a3a-4b1c-a11e-03b0541dd366/air-max-90-g-golf-shoe-qlD3wL.png',
      ]
    ),
    new Product(
      Math.random().toString(),
      'High Retro SE',
      'Nike',
      250,
      15,
      [],
      ['8', '11', '15'],
      [
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2a617295-4b1a-46e1-91e2-6963fd252c59/dunk-high-retro-se-shoes-tXRLdK.png',
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1af80254-b653-42f8-8702-61b39feca583/dunk-high-retro-se-shoes-tXRLdK.png',
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/433f980c-d56b-43d2-8475-fa917e4f2a7b/dunk-high-retro-se-shoes-tXRLdK.png',
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9142d4aa-ef07-40b9-bb64-0a057cf8a1a3/dunk-high-retro-se-shoes-tXRLdK.png',
      ]
    ),
    new Product(
      Math.random().toString(),
      'Air Max 90 G',
      'Nike',
      150,
      20,
      ['red', 'blue'],
      ['8', '10', '12'],
      [
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/08f113fb-396f-4445-a89b-f82752a7cb82/air-max-90-g-golf-shoe-qlD3wL.png',
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6cb1c1da-5a3a-4b1c-a11e-03b0541dd366/air-max-90-g-golf-shoe-qlD3wL.png',
      ]
    ),
    new Product(
      Math.random().toString(),
      'High Retro SE',
      'Nike',
      250,
      15,
      [],
      ['8', '11', '15'],
      [
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2a617295-4b1a-46e1-91e2-6963fd252c59/dunk-high-retro-se-shoes-tXRLdK.png',
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1af80254-b653-42f8-8702-61b39feca583/dunk-high-retro-se-shoes-tXRLdK.png',
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/433f980c-d56b-43d2-8475-fa917e4f2a7b/dunk-high-retro-se-shoes-tXRLdK.png',
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9142d4aa-ef07-40b9-bb64-0a057cf8a1a3/dunk-high-retro-se-shoes-tXRLdK.png',
      ]
    ),
    new Product(
      Math.random().toString(),
      'Air Max 90 G',
      'Nike',
      150,
      20,
      ['red', 'blue'],
      ['8', '10', '12'],
      [
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/08f113fb-396f-4445-a89b-f82752a7cb82/air-max-90-g-golf-shoe-qlD3wL.png',
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6cb1c1da-5a3a-4b1c-a11e-03b0541dd366/air-max-90-g-golf-shoe-qlD3wL.png',
      ]
    ),
    new Product(
      Math.random().toString(),
      'High Retro SE',
      'Nike',
      250,
      15,
      [],
      ['8', '11', '15'],
      [
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2a617295-4b1a-46e1-91e2-6963fd252c59/dunk-high-retro-se-shoes-tXRLdK.png',
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1af80254-b653-42f8-8702-61b39feca583/dunk-high-retro-se-shoes-tXRLdK.png',
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/433f980c-d56b-43d2-8475-fa917e4f2a7b/dunk-high-retro-se-shoes-tXRLdK.png',
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9142d4aa-ef07-40b9-bb64-0a057cf8a1a3/dunk-high-retro-se-shoes-tXRLdK.png',
      ]
    ),
    new Product(
      Math.random().toString(),
      'Air Max 90 G',
      'Nike',
      150,
      20,
      ['red', 'blue'],
      ['8', '10', '12'],
      [
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/08f113fb-396f-4445-a89b-f82752a7cb82/air-max-90-g-golf-shoe-qlD3wL.png',
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6cb1c1da-5a3a-4b1c-a11e-03b0541dd366/air-max-90-g-golf-shoe-qlD3wL.png',
      ]
    ),
    new Product(
      Math.random().toString(),
      'High Retro SE',
      'Nike',
      250,
      15,
      [],
      ['8', '11', '15'],
      [
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2a617295-4b1a-46e1-91e2-6963fd252c59/dunk-high-retro-se-shoes-tXRLdK.png',
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1af80254-b653-42f8-8702-61b39feca583/dunk-high-retro-se-shoes-tXRLdK.png',
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/433f980c-d56b-43d2-8475-fa917e4f2a7b/dunk-high-retro-se-shoes-tXRLdK.png',
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9142d4aa-ef07-40b9-bb64-0a057cf8a1a3/dunk-high-retro-se-shoes-tXRLdK.png',
      ]
    ),
  ];

  shoesSubject = new BehaviorSubject<Product[]>(this._shoes);
  getShoe(id: string){
    return [...this._shoes.filter(data=>{
      return data.id===id;
    })][0];
  }
  constructor() {}
}

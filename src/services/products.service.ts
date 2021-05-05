import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Bla bla bla',
      price: 122,
      image: '',
      stock: 1,
    },
  ];
  findAll() {
    return this.products;
  }
  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }
  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  filter(id: number) {
    this.products = this.products.filter((el) => el.id !== id);
  }
  delete(id: number, payload: any) {
    this.products = this.products.map((el) => {
      if (el.id === id) {
        return {
          id,
          ...payload,
        };
      } else {
        return el;
      }
    });
  }
}

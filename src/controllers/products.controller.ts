import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';

import { Response } from 'express';

import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get('/filter/')
  getProductFilter() {
    return `Yo soy un filter`;
  }
  //? Así es como se reciben los parametros de peticiones
  @Get(':productId')
  @HttpCode(HttpStatus.OK)
  getProduct(@Param('productId') productId: number) {
    //? El comentario por debajo es como se responderia usando a express
    // response.status(201).send({ message: `Producto con el id ${productId}` });
    return this.productsService.findOne(productId);
  }
  @Get('/')
  getProducts(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string = 'Without brand',
  ) {
    //? El código comentado es como se haria sin inyección de dependencias
    // return {
    //   message: `Products: limit -> ${limit} offset -> ${offset} brand => ${brand}`,
    // };
    return this.productsService.findAll();
  }
  @Post()
  create(@Body() payload: any) {
    //? El código abajo es como puedes retornar sin inyección de dependencias
    // return {
    //   message: 'Accion de crear',
    //   payload: payload,
    // };
    return this.productsService.create(payload);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    //? El código de abajo es como se haria sin servicios
    // return {
    //   id,
    //   payload,
    // };
    return this.productsService.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}

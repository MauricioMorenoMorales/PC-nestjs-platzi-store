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
  // ParseIntPipe,
} from '@nestjs/common';

import { ParseIntPipe } from '../common/parse-int.pipe';

import { Response } from 'express';

import { ProductsService } from '../services/products.service';

import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

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
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
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
  create(@Body() payload: CreateProductDto) {
    //? El código abajo es como puedes retornar sin inyección de dependencias
    // return {
    //   message: 'Accion de crear',
    //   payload: payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    //? El código de abajo es como se haria sin servicios
    // return {
    //   id,
    //   payload,
    // };
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.delete(id);
  }
}

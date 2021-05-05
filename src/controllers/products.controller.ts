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
  constructor(private productsService: ProductsService){
    
  }
  @Get('/filter/')
  getProductFilter() {
    return `Yo soy un filter`;
  }
  //? Así es como se reciben los parametros de peticiones
  @Get('/:productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Res() response: Response, @Param('productId') productId: string) {
    response.status(201).send({ message: `Producto con el id ${productId}` });
  }
  @Get('/')
  getProducts(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string = 'Without brand',
  ) {
    return {
      message: `Products: limit -> ${limit} offset -> ${offset} brand => ${brand}`,
    };
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Accion de crear',
      payload: payload,
    };
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}

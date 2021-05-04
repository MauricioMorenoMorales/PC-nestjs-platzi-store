import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola mundo mio';
  }
  @Get('nuevo')
  newEndpoint() {
    return 'Yo soy nuevo';
  }
  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  }
  //? Así es como se reciben los parametros de peticiones
  @Get('/products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `Producto con el id ${productId}`;
  }
  @Get('/categories/:categoryId/products/:productId')
  getCategory(
    @Param('productId') productId: string,
    @Param('categoryId') categoryId: string,
  ) {
    return `Producto con el id ${productId} en la categoria ${categoryId}`;
  }
}

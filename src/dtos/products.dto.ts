//? Para usar estos validators tambien se tiene que agregar una linea de codigo en el main.ts
import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator'; //Instalar npm class-validator

import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

//? Copia todas las validaciones de CreateProduct pero hace los parametros opcionales
export class UpdateProductDto extends PartialType(CreateProductDto) {}

// Se necesita importar {validationpipe} from '@nestjs/common en main.ts npm i class-validator class-transformer @nestjs/mapped-types
//Antes de el app.listen(3000) agrega app.useGlobalPipes(new ValidationPipe())

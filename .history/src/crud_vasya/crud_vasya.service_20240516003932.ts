import { Injectable } from '@nestjs/common';
import { CreateCrudVasyaDto } from './dto/create-crud_vasya.dto';
import { UpdateCrudVasyaDto } from './dto/update-crud_vasya.dto';

export class CrudVasyaService {
  create(createCrudVasyaDto: CreateCrudVasyaDto) {
    return 'This action adds a new crudVasya';
  }

  findAll() {
    return `This action returns all crudVasya`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crudVasya`;
  }

  update(id: number, updateCrudVasyaDto: UpdateCrudVasyaDto) {
    return `This action updates a #${id} crudVasya`;
  }

  remove(id: number) {
    return `This action removes a #${id} crudVasya`;
  }
}

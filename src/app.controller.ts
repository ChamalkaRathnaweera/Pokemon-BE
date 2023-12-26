import { Body, Controller, Delete, Get, Param, Post, Put,Query,UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.models';
import { UserUpdateDto } from './userUpdate.dto';
import { QueueScheduler } from 'rxjs/internal/scheduler/QueueScheduler';
import { Query as ExpressQuery } from 'express-serve-static-core';
//import { Query } from 'mongoose';
//import { query } from 'express';
//import { Query } from './schemas/user.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Create
  @Post()
  @UseGuards(AuthGuard('jwt'))
  async createUser(@Body() userDto: User){
    return this.appService.createUser(userDto)
  }
  
  //Search
  // @Get()
  //@UseGuards(AuthGuard('jwt'))
  // async findUser(@Query()query: ExpressQuery):Promise<User[]>{
  //   return this.appService.findUser(query);
  //  }

  // @Get()
  // async findUsers(@Query('keyword') keyword: string): Promise<User[]> {
  //   return this.appService.findUsers(keyword);
  // }

  @Get('users')
  async getUsers(@Query('page') page: number, @Query('keyword') keyword: string) {
    return this.appService.getUsers(page, keyword);
  }
  //Get all
  // @Get()
  // //@UseGuards(AuthGuard('jwt'))
  // readUser(){
  //   return this.appService.readUser()
  // }

   @Get(':id')
  //@UseGuards(AuthGuard('jwt'))
  async readUser( @Param('id') id:string){
    return this.appService.readUser()
  }

  //Update
  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async updateUser(
    @Param('id') id:string ,@Body() updateData:UserUpdateDto
    ):Promise<User>{
    return this.appService.updateUser(id,updateData)
  }

  //Delete
  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async deleteUser(@Param('id') id:string){
    return this.appService.deleteUser(id)
  }

}

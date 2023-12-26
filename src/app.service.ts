import { Injectable, NotFoundException, Options } from '@nestjs/common';
import {Model} from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { Query} from 'express-serve-static-core';

import { User, UserDocument } from './user.models';

@Injectable()
export class AppService {
  getHello: any;
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>
  ){}

  //  creating a pokemon
  async createUser(user: User): Promise<User>{
     const newUser = new this.userModel(user)
     return newUser.save()
  }

  // search pokemon
  async findUser(query: Query): Promise<User[]> {
    const resPerPage = 10;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);
  
    const keyword = query.keyword
      ? {
          name: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};
  
    const searchUser = await this.userModel
      .find({ ...keyword })
      .limit(resPerPage)
      .skip(skip)
      .exec();
  
    if (!searchUser) {
      throw new NotFoundException('Pokemon not found.');
    }
    return searchUser;
  }
  
  async getUsers(page: number, keyword: string): Promise<User[]> {
    const perPage = 10;
    const skip = (page - 1) * perPage;

    const query: any = {};

    if (keyword) {
      query.name = { $regex: new RegExp(keyword, 'i') };
    }

    const users = await this.userModel.find(query).skip(skip).limit(perPage).exec();

    return users;
  }
  
  //  reading the pokemon collection 
  async readUser(){
    return this.userModel.find({})
    .then((user)=>{return user})
    .catch((err)=>console.log(err))
  }

  // upadting the data
  async updateUser(id,data):Promise<User>{
    return this.userModel.findByIdAndUpdate(id,data,{new:true})
  }

  // deleting the data 
  async deleteUser(id){
    return this.userModel.findByIdAndRemove(id)
  }
  
}

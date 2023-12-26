import { User, UserDocument } from './user.models';
import { Model } from 'mongoose';
import { Query } from 'express-serve-static-core';
export declare class AppService {
    private readonly userModel;
    getHello: any;
    constructor(userModel: Model<UserDocument>);
    createUser(user: User): Promise<User>;
    findUser(query: Query): Promise<User[]>;
    readUser(): Promise<void | (User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    updateUser(id: any, data: any): Promise<User>;
    deleteUser(id: any): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}

import { AppService } from './app.service';
import { User } from './user.models';
import { UserUpdateDto } from './userUpdate.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createUser(userDto: User): Promise<User>;
    findUser(query: ExpressQuery): Promise<User[]>;
    readUser(id: string): Promise<void | (User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    updateUser(id: string, updateData: UserUpdateDto): Promise<User>;
    deleteUser(id: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}

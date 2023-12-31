"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let AppService = class AppService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async createUser(user) {
        const newUser = new this.userModel(user);
        return newUser.save();
    }
    async findUser(query) {
        const resPerPage = 10;
        const currentPage = Number(query.page) || 1;
        const skip = resPerPage * (currentPage - 1);
        const keyword = query.keyword ? {
            name: {
                $regex: query.keyword,
                $options: 'i'
            },
        }
            : {};
        const searchUser = await this.userModel.find(Object.assign({}, keyword)).limit(resPerPage).skip(skip);
        if (!searchUser) {
            throw new common_1.NotFoundException('Pokemon not found.');
        }
        return searchUser;
    }
    async readUser() {
        return this.userModel.find({})
            .then((user) => { return user; })
            .catch((err) => console.log(err));
    }
    async updateUser(id, data) {
        return this.userModel.findByIdAndUpdate(id, data, { new: true });
    }
    async deleteUser(id) {
        return this.userModel.findByIdAndRemove(id);
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('user')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map
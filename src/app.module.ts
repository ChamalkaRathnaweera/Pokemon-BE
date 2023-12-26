import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserSchema } from './user.models';
//import { PokeUserModule } from './poke-user/poke-user.module'; 
//import { PokeUserController } from './poke-user/poke-user.controller';
//import { PokeUserService } from './poke-user/poke-user.service';
//import { AuthModule } from './auth/auth.module';
//import { AuthService } from './auth/auth.service';
//import { AuthConfig } from './auth/auth.config';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://dbChama:Chama%40123@cluster0.e3gdcqn.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name:'user',schema:UserSchema}]),
    //PokeUserModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    //AuthModule,
  ],
    
  controllers: [AppController/*,PokeUserController*/],
  providers: [AppService,/*PokeUserService,AuthService, AuthConfig*/],
})
export class AppModule {}

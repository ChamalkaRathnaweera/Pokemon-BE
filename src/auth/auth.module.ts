import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthConfig } from './auth.config';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
@Module({
    imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
    providers: [AuthService,
        {
            provide: 'AuthConfig', // provide token to resolve AuthConfig dependency
            useClass: AuthConfig, // specify the class to be used as AuthConfig
        },
    JwtStrategy,
    ],
    controllers: [AuthController]
})
export class AuthModule { }
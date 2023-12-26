import { AuthService } from './auth.service';
import { AuthConfig } from './auth.config';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly authService;
    private authConfig;
    constructor(authService: AuthService, authConfig: AuthConfig);
    validate(payload: any): Promise<boolean>;
}
export {};

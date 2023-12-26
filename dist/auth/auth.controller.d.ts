import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerRequest: {
        name: string;
        password: string;
        email: string;
    }): Promise<unknown>;
    login(authenticateRequest: {
        name: string;
        password: string;
    }): Promise<unknown>;
}

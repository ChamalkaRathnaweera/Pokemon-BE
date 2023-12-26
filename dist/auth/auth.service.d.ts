import { AuthConfig } from './auth.config';
export declare class AuthService {
    private readonly authConfig;
    private userPool;
    private sessionUserAttributes;
    constructor(authConfig: AuthConfig);
    registerUser(registerRequest: {
        name: string;
        email: string;
        password: string;
    }): Promise<unknown>;
    authenticateUser(user: {
        name: string;
        password: string;
    }): Promise<unknown>;
}

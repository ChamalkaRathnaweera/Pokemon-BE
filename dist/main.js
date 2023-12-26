"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
global['fetch'] = require('node-fetch');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    await app.listen(8000);
}
bootstrap();
//# sourceMappingURL=main.js.map
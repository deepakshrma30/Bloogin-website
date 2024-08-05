"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupinput = void 0;
const zod_1 = require("zod");
exports.signupinput = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6, "Password must be six char"),
    name: zod_1.z.string().optional()
});

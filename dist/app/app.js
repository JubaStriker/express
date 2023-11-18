"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const useRouter = express_1.default.Router();
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
app.use('/api/v1', useRouter);
useRouter.get('/user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: 'User successfully created',
        data: user
    });
});
app.get('/', logger, (req, res) => {
    res.send('Hello Developers!');
});
exports.default = app;

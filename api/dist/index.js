"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const app = (0, express_1.default)();
// middlware
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
// Datatbase
const URI = process.env.MONGODB_URL;
mongoose.connect(URI, {
    autoIndex: false,
}, (err) => {
    if (err)
        throw err;
    console.log("Mongodb connection.");
});
// Routes
app.use("/api", routes_1.default);
// Start server listening
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Express is listening on port ${port}`);
});
//# sourceMappingURL=index.js.map
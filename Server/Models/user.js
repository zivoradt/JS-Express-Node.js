"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const passport_local_mongoose_1 = __importDefault(require("passport-local-mongoose"));
const UserChema = new Schema({
    username: String,
    EmailAddress: String,
    DisplayName: String,
    created: {
        type: Date,
        default: Date.now()
    },
    updated: {
        type: Date,
        default: Date.now()
    }
}, {
    collection: 'user'
});
UserChema.plugin(passport_local_mongoose_1.default);
const Model = mongoose_1.default.model("User", UserChema);
exports.default = Model;
//# sourceMappingURL=user.js.map
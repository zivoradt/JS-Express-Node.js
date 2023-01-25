"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
const mongoose_1 = require("mongoose");
const Schema = mongoose_1.default.Schema;
const ContactSchema = new Schema({
    FullName: String,
    EmailAddress: String,
    ContactNumber: String
}, {
    collection: "contact"
});
exports.Model = mongoose_1.default.model("Contact", ContactSchema);
//# sourceMappingURL=contact.js.map
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ContactSchema = new Schema
({
    FullName: String,
    EmailAdress: String,
    ContactNumber: String
},
{
    collection: "contact"
});

export const Model = mongoose.model("Contact", ContactSchema);


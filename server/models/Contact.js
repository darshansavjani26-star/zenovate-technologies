import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        service: String,
        message: String,
    },
    { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String, required: true,
        },
        email: {
            type: String, required: true, unique: true,
        },
        password: {
            type: String, required: true,
        },
        phone: {
            type: String, required: true,
        },
        status: {
            type: String, default: "Work"
        },
        description: {
            type: String, default: ""
        },
        profession: {
            type: String, default: "User"
        },
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema);
export default User
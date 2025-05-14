import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import { AvailableUserRoles, UserRolesEnum } from "../utils/constants";

const userSchema = mongoose.Schema(
    {
        avatar: {
            type: {
                url: String,
                localpath: String,

            },
            default: {
                url: `https://placehold.co/600x400`,
                localpath: "",
            }
        },
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        email: {
            type: String,
            require: true,
            trim: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            trim: true,
            require: true,
        },
        role: {
            type: String,
            enum: AvailableUserRoles,
            default: UserRolesEnum.MEMBER,
        },
        isEmailVerified: {
            type: Boolean,
            default: false
        },
        refreshToken: {
            type: String,
        },
        emailToken: {
            type: String,
        },
        emailTokenExpiry: {
            type: Date,
        },
        resetPasswordToken: {
            type: String,
        },
        resetPasswordTokenExpiry: {
            type: Date,
        }
    },
    {
        timestamps: true
    }
)

// hashing password before storing it into database 
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})

// compare password 
userSchema.method.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.method.isEmailVerified = async function () {
    return this.isEmailVerified ;
}

const User = mongoose.model("User", userSchema);

export default User;
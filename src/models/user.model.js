import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        minLength: 6
    }

}, {
    timestamps: true
})

userSchema.pre("save", function (){

    if(!this.isModified("password")){
        return;
    }
    this.password = bcrypt.hashSync(this.password, 10);
});

userSchema.methods.generateJWT = function(){
    return jwt.sign({
        id: this._id
    }, process.env.JWT_SECRET, {
        expiresIn: "5m"
    })
}
userSchema.methods.comparePassword = function(pw){
    return bcrypt.compareSync(pw, this.password);
}

export const userModel = mongoose.model("User", userSchema);
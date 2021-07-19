import { Schema, model } from "mongoose";
const UserSchema = Schema({
username: {
type: String,
required: true
},
email: {
type: String,
required: true
},
password: {
type: String,
required: true
},
createdAt: {
type: Date,
default: Date.now()
}
});
// export model user with UserSchema
export default model("user", UserSchema);

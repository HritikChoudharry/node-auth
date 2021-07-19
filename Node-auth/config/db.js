import { connect } from "mongoose";
// Replace this with your MONGOURI.
const MONGOURI =
"mongodb+srv://HritikChoudharry:Resume12@node-auth.afx4r.mongodb.net/node-authretryWrites=true&w=majority";
const InitiateMongoServer = async () => {
try {
await connect(MONGOURI, {
useNewUrlParser: true
});
console.log("Connected to DB !!");
} catch (e) {
console.log(e);
throw e;
}
};
export default InitiateMongoServer;
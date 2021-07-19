import express from "express";
import { json } from "body-parser";
import user from "./route/user"; 
import employee from "./route/employee";
import HR from "./route/HR";
import InitiateMongoServer from "./config/db";

InitiateMongoServer();

const app = express();
// PORT
const PORT = process.env.PORT || 4000;

app.use(json());

app.get("/", (req,res) => {
res.json({ message: "API Working" });
});

app.use("/user", user);
app.use("/employee", employee);
app.use("/HR", HR);

app.listen(PORT, (req, res) => {
console.log(`Server Started at PORT ${PORT}`);
});
import express from "express";
const app = express();
const port = 3001;
import StudentRoutes from "./components/StudentRoutes.js";
import routerOrder from "./components/ordersRoutes.js";
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.use("/users/",StudentRoutes);
app.use("/orders/",routerOrder);
import express from "express";
import {GetOrders,GetOrder,CreateOrder,UpdateOrder,DeleteOrder} from "./controllersOrder.js"
const routerOrder = express.Router();

 routerOrder.get("/",GetOrders); 
 routerOrder.get("/:id",GetOrder );
 routerOrder.post("/", CreateOrder);
 routerOrder.put("/:id", UpdateOrder);
 routerOrder.delete("/:id",DeleteOrder );
export default routerOrder;

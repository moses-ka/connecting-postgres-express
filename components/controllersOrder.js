import express from "express";
import {client} from "./elephantsql.js";
import { ordersQuery, orderQuery,createOrderQuery,updateOrderQuery,deleteOrderQuery } from "./querys.js";
export const GetOrders = (req, res) => {
  client.query(ordersQuery, (err, result) => {
    if (err) {
      return console.error("error running query Get orders", err);
    }
    console.log("get orders were called");
    res.status(200).json(result.rows);
    
  });
};
export const GetOrder = (req, res) => {
  const  id  = req.params.id;
  client.query(orderQuery, [id],(err, result) => {
    if (err) {
      return console.error("error running query Get 1 order", err);
    }
    console.log("get 1 order was called");
    res.status(200).json(result.rows);
    
  });
}
export const CreateOrder = (req, res) => {
  const  {price,date,user_id} = req.body;
  console.log(price,date,user_id);
  client.query(createOrderQuery, [price,date,user_id],(err, result) => {
    if (err) {
      return console.error("error running query create order", err);
    }
    console.log("get create order was called");
    res.status(200).send('order was created');
    
  });
}

export const UpdateOrder = (req, res) => {
  const {price,date,user_id} = req.body;
  const  id  = req.params.id;
  client.query(updateOrderQuery, [price,date,user_id,id],(err, result) => {
    if (err) {
      return console.error("error running query update order", err);
    }
    console.log("update order was called");
    res.status(200).send('order  was updated');
    
  });
}
export const DeleteOrder = (req, res) => {
  const id = req.params.id;
  client.query(deleteOrderQuery, [id],(err, result) => {
    if (err) {
      return console.error("error running query delete order", err);
    }
    console.log("delete order was called");
    res.status(200).send('order was deleted');
  } );
}
import express from "express";
import {client} from "./elephantsql.js";
import { usersQuery, userQuery,createUserQuery,updateUserQuery,deleteUserQuery } from "./querys.js";
export const GetUsers = (req, res) => {
  client.query(usersQuery, (err, result) => {
    if (err) {
      return console.error("error running query GetUsers", err);
    }
    console.log("get users were called");
    res.status(200).json(result.rows);
    
  });
};
export const GetUser = (req, res) => {
  const  id  = req.params.id;
  client.query(userQuery, [id],(err, result) => {
    if (err) {
      return console.error("error running query Get1User", err);
    }
    console.log("get 1user was called");
    res.status(200).json(result.rows);
    
  });
}
export const CreateUser = (req, res) => {
  const  {first_name,last_name,age,active} = req.body;
  console.log(first_name,last_name,age,active);
  client.query(createUserQuery, [first_name,last_name,age,active],(err, result) => {
    if (err) {
      return console.error("error running query Get1User", err);
    }
    console.log("get create user was called");
    res.status(200).send('user was created');
    
  });
}

export const UpdateUser = (req, res) => {
  const  {first_name,last_name,age,active} = req.body;
  const  id  = req.params.id;
  client.query(updateUserQuery, [first_name,last_name,age,active,id],(err, result) => {
    if (err) {
      return console.error("error running query Get1User", err);
    }
    console.log("updateuser was called");
    res.status(200).send('user was updated');
    
  });
}
export const DeleteUser = (req, res) => {
  const first_name = req.body.first_name;
  client.query(deleteUserQuery, [first_name],(err, result) => {
    if (err) {
      return console.error("error running query deleteUser", err);
    }
    console.log("delete user was called");
    res.status(200).send('user was deleted');
  } );
}
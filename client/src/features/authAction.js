import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "../service/auth.service.js";
import { ACTION_TYPE } from "./authActionType";
import axios from "axios";
export const registerUser = createAsyncThunk(
  ACTION_TYPE.ADD_USER,
  async ({ userName, email, password, role }, { rejectWithValue }) => {
    try {
      const res = await register({ userName, email, password, role });
      return res;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const loginUser = createAsyncThunk(
  ACTION_TYPE.SIGN_IN,
  async ({ email, password }, { rejectWithValue }) => {
    console.log("email, password: ", email, password);
    try {
      const res = await axios.post("http://localhost:8000/auth/login", {
        email,
        password,
      });
      console.log("res", res);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

// export const updateUser = createAsyncThunk(
//  ACTION_TYPE.UPDATE_USER,
//   async ({data,token}, { rejectWithValue }) => {
//     try {
//       console.log("action", data);
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization:token
//         },
//       };

//       const res = await axios.post(
//         `http://localhost:8080/users/profile`,
//         {data},
//         config
//       );
//       console.log("action res", res);
//       return res;
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

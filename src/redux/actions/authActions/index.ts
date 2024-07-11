import { LOGOUT_USER, SET_USER } from "../actionTypes";

export const setUser = (user:any):any => (
    console.log(user)
//     {
//     type: SET_USER,
//     payload: user,
//   }
  );
  
  export const logoutUser = () => ({
    type: LOGOUT_USER,
  });
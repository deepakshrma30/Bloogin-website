import { create } from "zustand";
import { createUserSlice,  userSlice } from "./userSlice";
import { immer } from "zustand/middleware/immer";
export type Store=userSlice

export const useStore=create<Store>()(immer((...a)=>({
    ...createUserSlice(...a),
    
})))
import {StateCreator} from'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
export interface userInfo {
  name?: string;
  email?: string;
  token?: string;
}

export type UserActions = {
  setToken: (token: string) => void;
  setUser: (user: userInfo) => void;
  getUser:()=>userInfo | undefined;
  reset:()=>void;
};

export const initialState: userInfo = {
  name: "",
  email: "",
  token: "",
};

export type userSlice=UserActions & userInfo;
 
export const createUserSlice:StateCreator<userSlice,[["zustand/immer",never]],[["zustand/persist",never]],userSlice>=persist((set,get)=>({
    ...initialState,
    setToken:(token)=>set((state)=>{
        state.token=token;
    }),
    setUser:(user)=>set((state)=>{
        state.name = user.name;
    state.email = user.email;
    state.token = user.token;
    }),
    getUser: () => ({
        name: get().name,
        email: get().email,
        token: get().token,
      }),
      reset: () => {
        set(initialState)
      },
}),
{
  name: 'user-storage', 
  storage: createJSONStorage(() => sessionStorage),
},
)
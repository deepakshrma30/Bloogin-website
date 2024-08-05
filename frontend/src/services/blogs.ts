import api from "./api"

export const getBlogs=async()=>{
    try{
    const res= await api.get("/objects")
    return res?.data
    }catch(error:any){
        console.log(error)
    } 
}

export default getBlogs
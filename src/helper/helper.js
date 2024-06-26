import axios from 'axios';



/** register user function */
export async function registerUser(credentials){
    const data  = await axios.post(`http://localhost:5000/api/user/register`,{
         username:credentials.username,
         email:credentials.email,
         password:credentials.password,
      }).catch((err)=>console.log(err))   
      console.log(data)
      localStorage.setItem('token',data.data.token)
      return Promise.resolve(data.message)
}


export async function userLogin(credentials){
    const data  = await axios.post(`http://localhost:5000/api/user/login`,{
         EmailOrName:credentials.EmailOrName,
         password:credentials.password,
      }).catch((err)=>console.log(err))  
       console.log(data)
      localStorage.setItem('token',data.data.token)
      return Promise.resolve(data.message)
}

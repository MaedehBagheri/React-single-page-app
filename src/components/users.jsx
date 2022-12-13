
// import { useEffect,useState } from "react";
// import axios from "axios";

// const User =(props)=>{

//     console.log(props.match.params);
//     const [user,setUser] =useState({});

//     useEffect( ()=>{
//         async function fetch(){
//        const response=await axios.get(`https://reqres.in/api/users/${props.match.params.id}`);
//         setUser(response.data.data);}
//         console.log(fetch);
//     })



//     return(<>
//      <img src={user.avatar} style={{borderRadius:"50%" , width:"100px"}} alt="" />
           
//             <h4>{user.first_name} {user.last_name}</h4>
          
//             <h5>{user.email}</h5>
//     </>
  
//     )
// }

// export default User;
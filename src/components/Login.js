import React, {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'


function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const history = useHistory();
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            history.push("/Home")
        }
    },[])
    async function login()
    {
        console.warn("data",email,password)
        let item = {email,password}
        await fetch('https://reqres.in/api/login',{
            method:'POST',
            headers:{
              'Accept':'application/json',
              'Content-type':'application/json'
            },
            body: JSON.stringify(item)
          })
          .then((response) => {
            if(response.status === 200){
                console.log("SUCCESSS")
                localStorage.setItem('user-info',JSON.stringify(response));
                history.push("/Home")    
            }
            else if(response.status === 400){
                alert("SOMETHING WENT WRONG")
                
            }
        })

    }

    return(
        <div>
    
            <div className="col-sm-6 offset-sm-3">
                <h1>Login</h1>
                <input type="text" className="form-control" placeholder="email"
                onChange={(e)=>setEmail(e.target.value)}/>
                <br></br>
                <input type="password" className="form-control" placeholder="password"
                onChange={(e)=>setPassword(e.target.value)}/>
                <br></br>
                <button onClick={login} className="btn btn-primary">Login</button>
            </div>
        </div>
    )
}
export default Login;
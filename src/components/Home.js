import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

const Home = () => {
    const [users, setUser] = useState([]);
    const [input,setInput] = useState("");

    useEffect(() => {
        console.log("use effect is called");
        loadUsers();
    },[]);

    // Featching data from api
    const loadUsers = async () => {
        const result = await axios.get("https://reqres.in/api/users");
        setUser(result.data);

    };

    //Send Delete request to api
    const deleteUser = async id => {
        let x=await axios.delete(`https://reqres.in/api/users/${id}`);
        console.log(x);
        loadUsers();
        alert("User will be Deleted");
        
      };
    
    // Handel Changes when input field of search is changed.
    const handleChange =(e)=>{
        e.preventDefault();
        setInput(e.target.value);
    };
    if(input.length>0){
        console.log("filter is called");
        users.data = users.data.filter((i) =>{
            if(i.first_name.toLowerCase().match(input)||i.last_name.toLowerCase().match(input)||i.email.toLowerCase().match(input)){
                return true;
            
            }
            
        });
        loadUsers();
    }
    
    return (
        <div className="container">
            <div className="py-4">
                <h1>My Customer</h1>

            {/*Text Box */}
                <input type="text" placeholder="Search..." 
                onChange={handleChange}
                value={input}
                style={{float:'right',
                        width:'20%',
                        marginBottom:'10px'
                        }}/>

                 {/*Customer Table */}       
                <table class="table table-hover">
                    <thead class ="thead-dark">
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        users?.data?.map((user, index) => (
                        <tr>
                          <td>{user.first_name}</td>
                          <td>{user.last_name}</td>
                          <td>{user.email}</td>
                          <td>
                              <Link class="btn btn-light mr-2" to={`/EditUser/${user.id}`}>EDIT</Link>
                              <Link class="btn btn-danger mr-2" onClick={() => deleteUser(user.id)}>DELETE</Link>
                          </td>
                        </tr>
                        ))} 
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Home;
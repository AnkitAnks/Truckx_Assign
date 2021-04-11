import React,{useState,useEffect} from "react";
import axios from 'axios'
import { useHistory, useParams} from "react-router-dom";

const EditUser = () => {
    let history = useHistory();
    const {id} = useParams();

    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
    
    });
    const { firstname, lastname, email} = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        console.log("Use Effect is Called");
        loadUser();
    },[]);
    
    const loadUser = async () =>{
        const result = await axios.get(`https://reqres.in/api/users/${id}`);
        setUser(result.data);
        console.log(user);
    };
    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`https://reqres.in/api/users/${id}`, user);
        history.push("/Home");
        alert("Customer is Updated")
      };
      
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit User {id}</h2>
                <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter New First_Name"
                        name="firstname"
                        value={firstname}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter New Last_Name"
                        name="lastname"
                        value={lastname}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter New E-mail Address"
                        name="email"
                        value={email}
                        onChange={e => onInputChange(e)}
                    />
                </div>
               
                <button className="btn btn-primary btn-block">SUBMIT</button>
            </form>
            </div>
        </div>
    );
};
export default EditUser;
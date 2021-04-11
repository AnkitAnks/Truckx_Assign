import {React,useState} from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
    
    });
    const { firstname, lastname, email} = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const onSubmit = async e => {
        e.preventDefault();
        let result=await axios.post("https://reqres.in/api/users", user);
        console.log(result.data);
        history.push("/Home");
      };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="First_Name"
                        name="firstname"
                        value={firstname}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Last_Name"
                        name="lastname"
                        value={lastname}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter Your E-mail Address"
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
export default AddUser;
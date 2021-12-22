import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginuser } from "../actions/index";

const Login = () => {
    const login = useSelector((state) => state.Islogin);
    const dispatch = useDispatch();
    const [name, setname] = useState("");
    const [pass, setpass] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            alert("Please Enter Name");
            return;
        }

        //const id = Math.floor(Math.random() * 10000) + 1;

        dispatch(loginuser());

        setname("");
        setpass("");
    };

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>User Name</label>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label>Passwrod</label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={pass}
                    onChange={(e) => setpass(e.target.value)}
                />
            </div>
            <input type="submit" value="Login" className="btn btn-block" />
        </form>
    );
};

export default Login;

import Button from "./button";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Hader = ({ title, onAdd, showAdd }) => {
    const login = useSelector((state) => state.Islogin);

    const location = useLocation();

    return (
        <header className="header">
            <h1>{title}</h1>

            {login ? "" : <h6>Click to Login Add Task</h6>}

            {login
                ? location.pathname === "/" && (
                    <Button
                        color="green"
                        text={showAdd ? "close" : "Add"}
                        onClick={onAdd}
                    />
                )
                : location.pathname === "/" && (
                    <Button
                        color="green"
                        text={showAdd ? "close" : "Login"}
                        onClick={onAdd}
                    />
                )}
        </header>
    );
};

export default Hader;

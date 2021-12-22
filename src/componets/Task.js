import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deltask, toremder } from "../actions/index";

//import { AiFillEdit } from 'react-icons/ai';

const Task = ({ task }) => {
    const dispatch = useDispatch();

    return (
        <div
            className={`task ${task.remider ? "remider" : ""}`}
            onDoubleClick={() => dispatch(toremder(task.id))}
        >
            <h3>
                {task.text}{" "}
                <FaTimes
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => dispatch(deltask(task.id))}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    );
    /*
    return (
      <div>
        task
      </div>
    )*/
};

export default Task;

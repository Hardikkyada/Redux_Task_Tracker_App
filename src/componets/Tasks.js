import Task from "./Task";
import { useSelector } from "react-redux";

const Tasks = () => {
    const tasks = useSelector((state) => state.Taskreducer.task);
    console.log(tasks);

    return (
        <>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                />
            ))}
        </>
    );
};

export default Tasks;

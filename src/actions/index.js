//add task
export const addTask = (task) => {
    return {
        type: "Add_Task",
        data: task
    };
};

//delete task

export const deltask = (id) => {
    return {
        type: "Del_Task",
        id: id
    };
};

//Toggle Remider

export const toremder = (id) => {
    return {
        type: "Up_Task",
        id: id
    };
};


//Login
export const loginuser = () => {
    return {
        type: "SIGN_IN"
    };
};

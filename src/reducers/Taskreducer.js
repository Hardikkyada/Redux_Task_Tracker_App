import { useState, useEffect } from 'react';

var initialData = {
    task: [{
        "id": 1,
        "text": "Attending Event",
        "day": "Feb 15th at 2.30pm",
        "remider": true
    },
        {
            "id": 2,
            "text": "Watch Movies",
            "day": "Jan 10th at 5.30pm",
            "remider": false
        },
        {
            "id": 3,
            "text": "Reading News",
            "day": "Jun 7th at 7.30pm",
            "remider": false
        },
        {
            "id": 4,
            "text": "study",
            "day": "Aug 17th at 8.30pm",
            "remider": false
        }]
};



const Taskreducer = (state = initialData, action) => {
    
    switch (action.type) {
        case "Add_Task":
            //      const id = Math.floor(Math.random() * 10000) + 1;
            const data = action.data;
            console.log(data);
            const newtask = { ...data };

            return {
                ...state,
                task: [...state.task, newtask]
            };

        /*const newtask = { id, ...task };
        settasks([...tasks, newtask]);*/

        case "Del_Task":
            //settasks(tasks.filter((task) => task.id !== id));

            const uptask = state.task.filter((task) => task.id !== action.id);

            console.log(uptask);
            return {
                ...state,
                task: uptask
            };

        case "Up_Task":
            //settasks(tasks.map((t) => (t.id === id ? { ...t, remider: !t.remider } : t)));

            const upremider = state.task.map((t) =>
                t.id === action.id ? { ...t, remider: !t.remider } : t
            );

            return {
                ...state,
                task: upremider
            };

        default:
            return state;
    }
};

export default Taskreducer;

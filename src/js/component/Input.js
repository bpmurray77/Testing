import React, {useState} from "react";


const Input = ({addTask}) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }

    return(
        <div class="input-group">
            <span class="input-group-text">Quantity</span>
            <form onSubmit={handleSubmit}>
            <input
                type="number"
                aria-label="Quantity"
                class="form-control"
                onChange={handleChange}
            />
            </form>
        </div>
    );
};

export default Input


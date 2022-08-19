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
        <div>
        <div class="row">
        <div class="row ifields">
            <div class="input-group">
                    <span class="input-group-text">Quantity</span>
                    <input
                      type="number"
                      aria-label="Quantity"
                      class="form-control"
                      name="quantity"
                      placeholder="Quantity"
                      onChange={handleChange}
                    />
                  </div>
            <div class="col-sm-2 form-group">
                <input type="number" min="1" class="form-control text-center" name="pquantity" placeholder="Product Quantity" value="2" onChange={handleChange} />
            </div>
            <div class="col-sm-1">
                <button class="btn btn-default add-btn">Add</button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Input


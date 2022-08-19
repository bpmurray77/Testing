import React, {useState} from "react";


const Input = ({}) => {

    let tab = [];
        const inv = (ev)=>{
            ev.preventDefault(); 
            let piece = {
                id: (tab.length +1),
                title: "test",
                quantity: document.getElementById('quanitity').value
            }
            tab.push(piece);

            localStorage.setItem('MyInventory', JSON.stringify(tab) );

            document.addEventListener('DOMContentLoaded', ()=>{
                document.getElementById('btn').addEventListener('click', inv);
            });

            console.log(list)

        }

    return(
        <div>
        <form>
        <div class="formBox">
            <label for="quantity">Quantity</label>
            <input type="number" id="quantity" placeholder="Quantity"/>
        </div>
        <div class="formBox">
            <button id="btn">Click</button>
        </div>
        <div id="msg">
            <pre></pre>
        </div>
        </form>
        </div>
    );
};

export default Input


import {useState} from "react";

function MyComponent(){
    const [foods, setFoods] = useState([]);

    function addFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood])

    }
    function remFood(index){
        setFoods(f => f.filter((_, i) => i !== index));
    }
    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => remFood(index)}>{food}</li>)}
            </ul>

            <input type="text" id="foodInput" placeholder="Enter Food Name" />
            <button onClick={addFood}>Add Food</button>
        </div>
        
    );
}

export default MyComponent
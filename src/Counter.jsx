import {useState} from "react"

function Counter(){
    const [count, setCount] = useState(0);

    const incCount = ()=>{
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }
    const decCount = ()=>{
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }
    const resetCount = ()=>{
        setCount(0)
    }

    return(
        <div>
            <p>{count}</p>
            <button onClick={decCount}>Decrease</button>
            <button onClick={resetCount}>Reset</button>
            <button onClick={incCount}>Increase</button>
        </div>
    );
}
export default Counter
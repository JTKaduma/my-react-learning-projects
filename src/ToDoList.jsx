import { useState, useEffect } from "react";

function TodoList() {
    const [listItem, setListItem] = useState(() => {
        const saved = localStorage.getItem("todoItems");
        return saved ? JSON.parse(saved) : [];//When the component first loads, check if todoItems is in localStorage. If yes, use it as the starting state; if not, start with an empty list.
    });
    const [newItem, setnewItem] = useState("");

    useEffect(() => {//Everytime listItem changes, useEffect saves it to local storage
        localStorage.setItem("todoItems", JSON.stringify(listItem));
    }, [listItem]);

    function handleInputChange(e) {
        setnewItem(e.target.value);
    }

    function addListItem() {
        if (newItem.trim() !== "") {
            setListItem(l => [...l, newItem]);
            setnewItem("");
        }
    }

    function delListItem(index) {
        const updateList = listItem.filter((_, i) => i !== index);
        setListItem(updateList);
    }

    function moveItemUp(index) {
        if (index > 0) {
            const updatedListItems = [...listItem];
            [updatedListItems[index], updatedListItems[index - 1]] = 
            [updatedListItems[index - 1], updatedListItems[index]];
            setListItem(updatedListItems);
        }
    }

    function moveItemDown(index) {
        if (index < listItem.length - 1) {
            const updatedListItems = [...listItem];
            [updatedListItems[index], updatedListItems[index + 1]] = 
            [updatedListItems[index + 1], updatedListItems[index]];
            setListItem(updatedListItems);
        }
    }

    return (
        <div className="to-do-list">
            <h1 className="list-header">To-Do List</h1>
            <input
                type="text"
                placeholder="Enter task..."
                value={newItem}
                onChange={handleInputChange}
            />
            <button onClick={addListItem} className="addBtn">Add</button>
            <ol>
                {listItem.map((item, index) => (
                    <li key={index}>
                        <span className="list-item">{item}</span>
                        <span>
                            <button className="delBtn" onClick={() => delListItem(index)}>Delete</button>
                        <button className="moveBtn" onClick={() => moveItemUp(index)}>Up</button>
                        <button className="moveBtn" onClick={() => moveItemDown(index)}>Down</button>
                        </span>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default TodoList;

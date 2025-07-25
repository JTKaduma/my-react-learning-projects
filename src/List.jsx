function List({items = []}){
    const itemList = props.items;
    // const fruits = [
    //     {id: 1, name: "apple", color: "red"}, 
    //     {id: 2, name: "banana", color: "yellow"}, 
    //     {id: 3, name: "orange", color: "orange"}, 
    //     {id: 4, name: "coconut", color: "brown"}, 
    //     {id: 5, name: "pineapple", color: "yellow"}
    // ]
    // fruits.sort((a, b) => a.name.localeCompare(b.name))
    // fruits.sort((a, b) => b.id - a.id)
    const listItems = itemList.map(item =>
        <li key={item.id}>{item.name}: &nbsp; {item.color}</li>
    );

    return(<ol>{listItems}</ol>)
}

export default List
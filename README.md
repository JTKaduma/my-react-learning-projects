# React Learning Journey: To-Do List Project

Welcome to my React practice project! This repo showcases everything I've learned so far while diving into the React ecosystem — using simple components, hooks, and concepts to build a functioning to-do list app.

---

## What I’ve Learned So Far

### JSX and Components
I’ve learned how to create reusable UI pieces using React components, written in JSX, which stands for JavaScript — a syntax extension that lets me write HTML-like structures inside JavaScript.

```jsx
function Header() {
  return <h1>Hello, React!</h1>;
}
```

### Props
I learned how to pass data into components using props, allowing dynamic rendering and reusable logic.

```jsx
function Welcome(props) {
  return <h2>Welcome, {props.name}!</h2>;
}
```

### Conditional Rendering
Using ternary operators or logical operators (&&), I can control what is shown on the screen based on logic or state.

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

### onChange Events
I've practiced working with form inputs using onChange, capturing real-time input values from users and storing them in state.

```jsx
<input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
```

### useState
I’ve used the useState hook to manage local component state — such as tracking to-do items or input values.

```jsx
const [task, setTask] = useState("");
```

### useEffect
I learned how to use useEffect to run code after the component renders. I used it to sync data with localStorage so the to-do list persists across refreshes.

```jsx
useEffect(() => {
  localStorage.setItem("todoItems", JSON.stringify(listItem));
}, [listItem]);
```
---

### Thoughts after first week
React makes building smooth and interactive UIs so easy by breaking it down into components. It helps to spot errors quickly and the dynamism is lovely.
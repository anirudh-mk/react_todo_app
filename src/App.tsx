import { ChangeEvent, FormEvent, useState } from "react";
import BottomNavbar from "./components/widgets/BottomNavbar";
import TodoItems from "./components/widgets/TodoItems";
import "./App.css";

function App() {
  interface Todo {
    id: string;
    title: string;
    completed: boolean;
  }

  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState("");
  let [filer, setFilter] = useState("all");

  function handleTask(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  function handleTodos(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTask("");
  }

  function toggleTodo(id: string, completed: boolean) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        } else {
          return todo;
        }
      });
    });
  }

  function deleteTodo(id: string) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function clearCompleatedTodos() {
    setTodos(todos.filter((value) => !value.completed));
  }

  function handleTodoFilter(selectedFilter: string) {
    setFilter(selectedFilter);
  }

  let filterdTodoList = todos.filter((todo) => {
    if (filer === "completed") {
      return todo.completed;
    } else if (filer === "active") {
      return !todo.completed;
    } else {
      return todos;
    }
  });

  const pendingTasks = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="top-container">
      <div className="headding">
        <h1>TODO</h1>
      </div>
      <div className="create-todo-container">
        <form action="" onSubmit={(event) => handleTodos(event)}>
          <table>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Currently typing"
                    value={task}
                    onChange={(event) => handleTask(event)}
                  />
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      {filterdTodoList.map((todo) => (
        <TodoItems
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        ></TodoItems>
      ))}
      <BottomNavbar
        pendingTasks={pendingTasks}
        clearCompleatedTodos={clearCompleatedTodos}
        handleTodoFilter={handleTodoFilter}
      ></BottomNavbar>
    </div>
  );
}

export default App;

import "../style/TodoItems.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface Props {
  id: string;
  title: string;
  completed: boolean;
  toggleTodo: any;
  deleteTodo: any;
}

function TodoItems({ id, title, completed, toggleTodo, deleteTodo }: Props) {
  return (
    <div className="todo-items-container">
      <table>
        <tbody>
          <tr>
            <td style={{ width: 31.125 }}>
              <input
                onChange={(event) => toggleTodo(id, event.target.checked)}
                type="checkbox"
                checked={completed}
              />
            </td>
            <td style={{ width: 332.453 }}>
              <label
                htmlFor=""
                className={completed ? "task-completed" : "none"}
              >
                {title}
              </label>
            </td>
            <td>
              <p onClick={() => deleteTodo(id)}>
                <FontAwesomeIcon icon={faTimes} />
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TodoItems;

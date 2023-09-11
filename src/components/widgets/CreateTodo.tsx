import "../style/CreateTodo.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useState } from "react";

function TodoItems() {
  const [task, setTask] = useState("");

  function handleTask(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  console.log(task);

  return (
    <div className="create-todo-container">
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
                onChange={(event) => handleTask(event)}
              />
            </td>
            <td>
              <p>
                <FontAwesomeIcon icon={faArrowRight} size="sm" />
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TodoItems;

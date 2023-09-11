import { FormEvent } from "react";
import "../style/BottomNavbar.css";

interface props {
  pendingTasks: number;
  clearCompleatedTodos: any;
  handleTodoFilter: any;
}

function BottomNavbar({
  pendingTasks,
  clearCompleatedTodos,
  handleTodoFilter,
}: props) {
  function handleFilter(event: FormEvent<HTMLDivElement>) {
    const selectedFilter = event.target as HTMLInputElement;
    handleTodoFilter(selectedFilter.value);
  }
  return (
    <div className="bottom-container">
      <table>
        <tbody>
          <tr>
            <td>
              <p>{pendingTasks} items left</p>
            </td>
            <td>
              <div
                className="radio-tile-group"
                onChange={(event) => handleFilter(event)}
              >
                <div className="input-container">
                  <input type="radio" name="radio" value="all" defaultChecked />
                  <label htmlFor="all">all</label>
                </div>
                <div className="input-container">
                  <input type="radio" name="radio" value="active" />
                  <label htmlFor="active">active</label>
                </div>
                <div className="input-container">
                  <input type="radio" name="radio" value="completed" />
                  <label htmlFor="completed">completed</label>
                </div>
              </div>
            </td>
            <td>
              <p onClick={() => clearCompleatedTodos()}>clear compleated</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BottomNavbar;

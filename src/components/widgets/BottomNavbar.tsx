import "../style/BottomNavbar.css";

interface props {
  pendingTasks: number;
  clearCompleatedTodos: any;
}

function BottomNavbar({ pendingTasks, clearCompleatedTodos }: props) {
  return (
    <div className="bottom-container">
      <table>
        <tbody>
          <tr>
            <td>
              <p>{pendingTasks} items left</p>
            </td>
            <td>
              <div className="radio-tile-group">
                <div className="input-container">
                  <input type="radio" name="radio" />
                  <label htmlFor="all">all</label>
                </div>
                <div className="input-container">
                  <input type="radio" name="radio" />
                  <label htmlFor="active">active</label>
                </div>
                <div className="input-container">
                  <input type="radio" name="radio" />
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

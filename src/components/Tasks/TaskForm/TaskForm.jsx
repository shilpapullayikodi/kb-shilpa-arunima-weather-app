
import PropTypes from "prop-types";
import useLocalStorageState from "use-local-storage-state";
import "./TaskForm.css";

const TaskForm = ({onAddTask}) => {
    const [taskName, setTaskName] = useLocalStorageState("taskName", {
    defaultValue: [],
  });

    const [taskCategory, setTaskCategory] = useLocalStorageState("taskCategory", {
        defaultValue: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        onAddTask({name: taskName, category: taskCategory});
        setTaskName('');
    }

    return (
        <form onSubmit={handleSubmit} className="task-form" aria-labelledby="taskFormHeading">
            <h2 className="toDo-formHeader" id="taskFormHeading">
                To-Do Form
            </h2>

            <div className="form__row__todo">
                <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder="Task Name" required/>
                <select value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)} required>
                    <option value="placeholder" disabled>Select Task Category</option>
                    <option value="Work">Work</option>
                    <option value="Goals">Goals</option>
                    <option value="Habits">Habits</option>
                    <option value="Shopping">Shopping</option>
                </select>
            </div>
            <div className="form__row-button">
                <button type="submit">Add Task</button>
            </div>
        </form>
    )
}
TaskForm.propTypes = {
    onAddTask : PropTypes.func.isRequired,
};

export default TaskForm;
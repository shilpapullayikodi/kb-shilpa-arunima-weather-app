import PropTypes from "prop-types";
import "./Tasks.css";

const Tasks = ({tasks}) => {
    const categorizedTasks = tasks.reduce((acc, task) => {
        (acc[task.category] = acc[task.category] || []).push(task);
        return acc;
    }, {});

    return (
        <div className="form-task--list">
            {Object.entries(categorizedTasks).map(([category, tasks])=> (
                <div key={category} className={`category category-${category}`}>
                    <h2>{category}</h2>
                    <ul className="task--list">
                        {tasks.map((task) => (
                            <li key={task.id}>{task.name}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )

}

Tasks.propTypes = {
    tasks : PropTypes.arrayOf(PropTypes.object),
};


export default Tasks;
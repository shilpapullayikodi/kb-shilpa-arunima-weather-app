import { uid } from "uid";
import PropTypes from "prop-types";
import "./Form.css";

const Form = ({ onAddActivity }) => {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formElement = form.elements;

    const data = {
      name: formElement.name.value,
      isGoodWeather: formElement.isGoodWeather.checked,
      id: uid()
    };
    onAddActivity(data);

    form.reset();
    formElement.name.focus();
  }

  return (
    <form
      className="form"
      aria-labelledby="formHeading"
      onSubmit={handleSubmit}
    >
      <h2 className="form__header" id="formHeading">
        Add new Activity:
      </h2>

      <div className="form__row">
        <label htmlFor="name" className="form__label">
          Activity Name:&nbsp;
        </label>
        <input
          type="text"
          id="name"
          className="form__input-text"
          name="name"
        ></input>
      </div>

      <div className="form__row">
        <label htmlFor="isGoodWeather" className="form__label">
          Good-weather activity:&emsp;
        </label>
        <input
          type="checkbox"
          id="isGoodWeather"
          name="isGoodWeather"
          className="form__input-checkbox"
        ></input>
      </div>
      <br/>
      <div className="form__row-button">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

Form.propTypes = {
  onAddActivity: PropTypes.func.isRequired,
}

export default Form;

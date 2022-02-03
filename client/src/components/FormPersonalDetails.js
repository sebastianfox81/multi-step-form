import React from "react";

const FormPersonalDetails = ({ values, handleChange, nextStep, prevStep }) => {
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div>
      <form>
        <label htmlFor="occupation"></label>
        <input
          id="occupation"
          type="text"
          value={values.occupation}
          onChange={handleChange}
        />
        <label htmlFor="city"></label>
        <input
          id="city"
          type="text"
          value={values.city}
          onChange={handleChange}
        />
        <label htmlFor="bio"></label>
        <input
          id="bio"
          type="text"
          value={values.bio}
          onChange={handleChange}
        />
        <button type="submit" onClick={back}>
          Back
        </button>
        <button type="submit" onClick={next}>
          Next
        </button>
      </form>
    </div>
  );
};

export default FormPersonalDetails;

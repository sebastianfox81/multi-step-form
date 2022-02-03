import React from 'react';

const FormUserDetails = ({ nextStep, values, handleChange}) => {

const next = (e) => {
  e.preventDefault();
  nextStep()
}
console.log(values.firstname)

  return (
    <div>
      <form onSubmit={next}>
        <label htmlFor="firstname"></label>
        <input onChange={handleChange} type="text" id='firstname'/>
        <label htmlFor="lastname"></label>
        <input onChange={handleChange} type="text" id='lastname'/>
        <label htmlFor="email"></label>
        <input onChange={handleChange} type="text" id='email'/>
        <button onClick={next} type="submit">Next</button>
      </form>
    </div>
  )
};

export default FormUserDetails;

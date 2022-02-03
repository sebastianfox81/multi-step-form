import React from 'react';

const FormUserDetails = ({ nextStep, values, handleChange}) => {

const next = (e) => {
  e.preventDefault();
  nextStep()
}

  return (
    <div>
      <form onSubmit={next}>
        <label htmlFor="firstname"></label>
        <input onChange={handleChange} type="text" id='firstname'value={values.firstname}/>
        <label htmlFor="lastname"></label>
        <input onChange={handleChange} type="text" id='lastname' value={values.lastname}/>
        <label htmlFor="email"></label>
        <input onChange={handleChange} type="text" id='email'value={values.email}/>
        <button onClick={next} type="submit">Next</button>
      </form>
    </div>
  )
};

export default FormUserDetails;

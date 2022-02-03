import React from 'react';

const Confirm = ({ values, nextStep, prevStep }) => {

  const next = (e) => {
    e.preventDefault();
    nextStep()
  }

  const back = (e) => {
    e.preventDefault();
    prevStep()
  }

  const { firstname, lastname, email, occupation, city, bio } = values

  return (
    <div>
      <h1>Confirm</h1>
      <div>
        <ul>
          <li>FirstName: {firstname}</li>
          <li>LastName: {lastname}</li>
          <li>Email: {email}</li>
          <li>Occupation: {occupation}</li>
          <li>City: {city}</li>
          <li>Bio: {bio}</li>
        </ul>
      </div>
      <div>
        <button onClick={prevStep}>Back</button>
      </div>
      <div>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default Confirm;

import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails'

const UserForm = () => {

  const [ userInfo, setUserInfo ] = useState({
    step: 1,
    firstname: '',
    lastname: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  })

  const nextStep = () => {
    const { step } = userInfo
    setUserInfo({...userInfo, step: step + 1})
  }

  const prevStep = () => {
    const { step } = userInfo;
    setUserInfo({...userInfo, step: step - 1})
  }

  const handleChange = (e) => {
    setUserInfo({...userInfo, [e.target.id]: e.target.value})
  }


  const { step } = userInfo;
  const { firstname, lastname, email, occupation, city, bio} = userInfo;
  const values = { firstname, lastname, email, occupation, city, bio}
  switch(step) {
    case 1:
    return (
      <FormUserDetails
        nextStep={nextStep}
        handleChange={handleChange}
        values={values}/>
    )
    case 2:
    return (
      <FormPersonalDetails
        nextStep={nextStep}
        prevStep={prevStep}
        handleChange={handleChange}
        values={values}/>
    )
    // case 3:
    // return (
    //   <FormUserDetails
    //     nextStep={nextStep}
    //     onChange={handlChange}
    //     values={values}/>
    // )
    // case 4:
    // return (
    //   <FormUserDetails
    //     nextStep={nextStep}
    //     onChange={handlChange}
    //     values={values}/>
    // )
  }

};

export default UserForm;

import React, { useState } from 'react';

const UserForm = () => {

  const [ userInfo, setUserInfo ] = useState({
    step: 1
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

  return <div><h1>User Form</h1></div>;
};

export default UserForm;

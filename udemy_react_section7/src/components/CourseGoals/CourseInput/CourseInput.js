import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const FormControl = styled.div`
    margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }


  &.invalid input{
    border-color: red;
    background: #ffd7d7;
  }

  &.invalid label{
    color: red;
  }

`

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true) // using this useState statement to make sure to pass some feedback whether the task entered is correct or incorrect

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false)
      return;
    }  // trim method is used to eliminate blank white space at the beginning or at the end
    // using the above if condition to make sure that the blank task is not entered




    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>

      {/* we are replacing the div on the next link with ForControl we have dynmically passes the style to it */}
      <FormControl className={!isValid && 'invalid'}>
        <label>Course Goal</label>   
        {/* in above label we are setting css style dynamically */}
        {/* <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label> */}
        <input type="text" onChange={goalInputChangeHandler} />
        {/* <input type="text"  style = {{borderColor : !isValid ? 'red' : 'black', background: !isValid ? 'salmon' : 'transparent'}} onChange={goalInputChangeHandler} /> */}
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

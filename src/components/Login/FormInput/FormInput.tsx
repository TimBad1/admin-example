import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';
import styles from './forminput.module.scss';

type TInput = 'email' | 'password';

interface IFormInput {
  typeInput: TInput;
  placeholder: string;
}

export function FormInput({typeInput, placeholder} :IFormInput) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(useSelector<RootState, string>(state => state.login[typeInput]));

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    console.log('formInput', event.target.value)
    setValue(event.target.value)
    dispatch({type: "VERIFICATION" , typeInput: event.target.value})
  }
    
  return (
    <label className={styles.form__label}>
      <input 
        className={styles.form__input} 
        type={typeInput} 
        value={value} 
        placeholder={placeholder}
        onChange={handleChange}
      />
    </label>
  );
}

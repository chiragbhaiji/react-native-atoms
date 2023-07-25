import React, {useContext} from 'react';
import {TextInput} from 'react-native';
import {FormContext, FormInputKeyT} from '../contexts/formProvider';

interface InputI {
  name: FormInputKeyT;
}

export const Input: React.FC<InputI> = ({name}) => {
  const {values, setValue} = useContext(FormContext);

  const value = values[name];

  const handleOnChangeText = (text: string) => {
    setValue && setValue({type: name, payload: text});
  };

  return (
    <TextInput
      placeholder={name}
      value={value}
      onChangeText={handleOnChangeText}
    />
  );
};

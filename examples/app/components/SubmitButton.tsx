import React, {useContext} from 'react';
import {Pressable, Text} from 'react-native';
import {FormContext} from '../contexts/formProvider';

export const SubmitButton = () => {
  const {values, onSubmit} = useContext(FormContext);

  const handleOnPress = () => {
    onSubmit && onSubmit(values);
  };

  return (
    <Pressable onPress={handleOnPress}>
      <Text>Login</Text>
    </Pressable>
  );
};

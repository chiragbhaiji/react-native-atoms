import React from 'react';
import {Input} from '../components/Input';
import {SubmitButton} from '../components/SubmitButton';
import {Form} from '../components/Form';
import {FormInputStateT} from '../contexts/formProvider';
import {useLogger} from '../contexts/loggerContext';

export const LoginScreen = () => {
  const log = useLogger();

  const login = ({email, password}: FormInputStateT) => {
    if (log) {
      log({type: 'info', message: email});
      log({type: 'info', message: password});
    }
  };

  return (
    <Form onSubmit={login} initialValues={{email: '', password: ''}}>
      <Input name="email" />
      <Input name="password" />
      <SubmitButton />
    </Form>
  );
};

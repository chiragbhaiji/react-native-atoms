import React from 'react';
import {
  FormContextProvider,
  FormContextProviderI,
} from '../contexts/formProvider';

export const Form: React.FC<FormContextProviderI> = ({
  children,
  initialValues,
  onSubmit,
}) => {
  return (
    <FormContextProvider initialValues={initialValues} onSubmit={onSubmit}>
      {children}
    </FormContextProvider>
  );
};

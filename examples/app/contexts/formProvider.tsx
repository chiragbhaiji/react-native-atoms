import React, {ReactNode, createContext, useReducer} from 'react';

export type FormInputKeyT = 'email' | 'password';

export type FormInputActionT = {
  type: FormInputKeyT;
  payload: string;
};

export type FormInputStateT = {
  [key in FormInputKeyT]: string;
};

const formReducer = (state: FormInputStateT, action: FormInputActionT) => {
  const {type, payload} = action;

  if (action.type) {
    return {...state, [type]: payload};
  }

  return state;
};

interface FormContextI {
  values: FormInputStateT;
  setValue?: (action: FormInputActionT) => void;
  onSubmit?: (values: FormInputStateT) => void;
}

export interface FormContextProviderI {
  children: ReactNode;
  initialValues: FormInputStateT;
  onSubmit: (values: FormInputStateT) => void;
}

export const FormContext = createContext<FormContextI>({
  values: {email: '', password: ''},
});

export const FormContextProvider: React.FC<FormContextProviderI> = ({
  children,
  initialValues,
  onSubmit,
}) => {
  const [values, dispatch] = useReducer(formReducer, initialValues);

  const setValue = (action: FormInputActionT) => dispatch(action);

  return (
    <FormContext.Provider value={{values, setValue, onSubmit}}>
      {children}
    </FormContext.Provider>
  );
};

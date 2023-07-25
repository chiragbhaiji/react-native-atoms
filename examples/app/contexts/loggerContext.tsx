import React, {ReactNode, createContext, useContext} from 'react';
import {LoggerT} from '../services/logger/logger.type';

interface LoggerContextI {
  log?: ({type, message}: LoggerT) => void;
}

interface LoggerContextProviderI {
  children: ReactNode;
  logger: LoggerContextI;
}

const LoggerContext = createContext<LoggerContextI>({});

export const useLogger = () => {
  const {log} = useContext(LoggerContext);

  return log;
};

export const LoggerContextProvider: React.FC<LoggerContextProviderI> = ({
  children,
  logger,
}) => {
  return (
    <LoggerContext.Provider value={logger}>{children}</LoggerContext.Provider>
  );
};

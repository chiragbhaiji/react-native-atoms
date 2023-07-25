import {LoggerT} from './logger.type';

const consoleLogger = ({type, message}: LoggerT) => {
  let func: (message: string) => void;

  switch (type) {
    case 'error':
      func = console.error;
      break;
    case 'info':
      func = console.info;
      break;
    default:
      func = console.log;
  }

  func(message);
};

export default consoleLogger;

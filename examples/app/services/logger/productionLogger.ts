import {LoggerT} from './logger.type';

const productionLogger = ({type, message}: LoggerT) => {
  let messageWithType: string;

  switch (type) {
    case 'error':
      messageWithType = '❗️:' + message;
      break;
    case 'info':
      messageWithType = '✅:' + message;
      break;
    default:
      messageWithType = '⚠️:' + message;
  }

  console.log(messageWithType);
};

export default productionLogger;

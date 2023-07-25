import consoleLogger from './logger/consoleLogger';
import productionLogger from './logger/productionLogger';

type ENV = 'dev' | 'prod';

let env: ENV = 'dev';

const services = {
  log: env === 'prod' ? productionLogger : consoleLogger,
};

export default services;

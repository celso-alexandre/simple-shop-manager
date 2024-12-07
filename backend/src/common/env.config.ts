import { registerAs } from '@nestjs/config';

export const Enviroment = registerAs('env', () => {
  return {
    basePath: '',
  };
});

export default Enviroment;

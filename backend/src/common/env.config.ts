import { registerAs } from '@nestjs/config';

export const Enviroment = registerAs('env', () => ({
  basePath: '',
}));

export default Enviroment;

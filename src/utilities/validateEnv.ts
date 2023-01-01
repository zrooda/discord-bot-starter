import { envSchema } from '../constants';
import { logger } from './logger';

export const validateEnv = () => {
  const { error } = envSchema
    .prefs({ errors: { label: 'key' } })
    .validate(process.env);

  if (error) {
    logger.fatal(error.message);
  }
};

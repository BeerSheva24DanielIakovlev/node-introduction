import logger from './logger.mjs';
import path from 'path';
import { fileURLToPath } from 'url';

logger.log(path.parse(fileURLToPath(import.meta.url))); //access __filename from ECS module


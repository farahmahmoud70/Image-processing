import { promises as fsPromises, existsSync } from 'fs';
import sharp from 'sharp';

export const makeDir = async (
  path: string,
  options?: { [name: string]: unknown }
): Promise<void> => {
  try {
    await fsPromises.mkdir(path, options);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// export const makeDir = async (path: string, options?:{[name:string]:unknown}): Promise<void> => {
//   mkdirSync(path, options);
// }

export const dirExist = async (path: string): Promise<boolean> => {
  try {
    return existsSync(path);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const writeData = async (
  path: string,
  data: sharp.Sharp,
  options?: { [name: string]: unknown }
): Promise<unknown> => {
  try {
    return fsPromises.writeFile(path, data, options);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

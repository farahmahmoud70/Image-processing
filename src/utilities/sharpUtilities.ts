import sharp from 'sharp';

export const sharpResize = (
  path: string,
  width: number,
  height: number
): sharp.Sharp => {
  // resize the image
  return sharp(path).resize(width, height);
};

export const sharpBuffer = async (image: sharp.Sharp): Promise<Buffer> => {
  // create buffer form the resized image
  return await image.toBuffer();
};

export const sharpToFile = async (
  image: sharp.Sharp,
  path: string
): Promise<sharp.OutputInfo> => {
  // after creating the dir will move the resized image into the thumb dir
  return await image.toFile(path);
};

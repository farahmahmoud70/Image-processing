import express from 'express';
import path from 'path';
import { makeDir, dirExist } from '../../utilities/helperFunctions';

import {
  sharpResize,
  sharpBuffer,
  sharpToFile,
} from '../../utilities/sharpUtilities';

const images = express.Router();

images.get('/', async (req: express.Request, res: express.Response) => {
  try {
    // get width and height, then convert them into numbers

    const width: number = parseInt(req.query.width as string);
    const height: number = parseInt(req.query.height as string);
    const filename: string = req.query.filename as string;
    const filetype: string = req.query.filetype as string;
    // handle validation
    if (
      !width ||
      !Number.isInteger(width) ||
      width <= 0 ||
      !height ||
      !Number.isInteger(height) ||
      height <= 0 ||
      !filename ||
      !filetype
    ) {
      res
        .status(403)
        .send(
          'The following error accouring processing your image remedy and try again: Error: some of the inputs are missing or having a bad format.'
        );
      return;
    }

    // resize the image
    const image = sharpResize(
      path.join(
        process.env.ROOT_PATH as string,
        `images/${filename}.${filetype}`
      ),
      width,
      height
    );

    // create buffer form the resized image
    const imageBuffer = await sharpBuffer(image);

    // make path for the thumb dir
    const thumbPath: string = path.join(
      process.env.ROOT_PATH as string,
      'thumb'
    );

    // check of thumb dir exist or not
    const isDirExist = await dirExist(thumbPath);

    // if exist will count. and if not will create the thumb dir
    if (!isDirExist) await makeDir(thumbPath);

    // after creating the dir will move the resized image into the thumb dir
    await sharpToFile(
      image,
      path.join(thumbPath, `thumb-${filename}-${width}x${height}.${filetype}`)
    );

    //add http headers for caching it will expire in one day.
    res.set({
      'Cache-Control': 'public, max-age=86400',
      Expires: new Date(Date.now() + 86400000).toUTCString(),
    });
    // send the buffered image as a body response
    // also we did use filetype to give us the ability to have diff file(images) types
    res.type(filetype).send(imageBuffer);
  } catch (err) {
    console.log(err);
    res.status(403);
    res.send(
      `The following error accouring processing your image remedy and try again: Error: ${err}`
    );
  }
});

export default images;

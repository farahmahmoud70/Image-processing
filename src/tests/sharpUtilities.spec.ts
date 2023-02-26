import { sharpResize } from '../utilities/sharpUtilities';

it('expect image to be resized', () => {
  expect(() => {
    sharpResize('src/images/fjord.jpg', 300, 300);
  }).not.toThrow();
});

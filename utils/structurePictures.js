export const structurePictures = (pictures) => {
  let arr = [];

  Object.entries(pictures).map(picture => {
    if (picture[1]) {
      arr.push(picture[1]);
    }
  });

  arr.pop();
  return arr;
};
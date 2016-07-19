function flatten(arr) {
  return [].concat.apply([], arr);
}

export function makeSlides(...slides) {
  return flatten(slides
    .map((slideObj) => {
      return Object.keys(slideObj)
        .map((key) => slideObj[key]);
    })
  );
}

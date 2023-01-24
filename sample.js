export const strictEquals2 = (a, b) => {
  if (isNaN(a) && isNaN(b)) {
    return false;
  } else if (!a && !b) {
    if (!Object.is(a, b)) {
      console.log(Object.is(a, b));
    } else {
      console.log(true);
    }
  } else {
    console.log(Object.is(a, b));
  }
};

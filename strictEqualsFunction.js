/* eslint-disable capitalized-comments */
export const strictEquals = (a, b) => {
  if (Object.is(a, b)) {
    if (Object.is(a, NaN)) {
      return false;
    }

    return true;
  }

  if (
    (Object.is(a, 0) && Object.is(b, -0)) ||
    (Object.is(a, -0) && Object.is(b, 0))
  ) {
    return true;
  }

  return false;
};

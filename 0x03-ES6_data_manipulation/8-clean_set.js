const cleanSet = (set, startString) => {
  // Check if startString is undefined
  if (startString === undefined || startString.length === 0) {
    return '';
  }

  return [...set]
    .filter((parameter) => (parameter !== undefined ? parameter.startsWith(startString) : ''))
    .map((parameter) => (parameter !== undefined ? parameter.slice(startString.length) : ''))
    .join('-');
};

export default cleanSet;

/**
 *
 * @param {String} name
 * @return {String}
 * @example
 * const defaultAwesomeFunction = require('<LibraryName>');
   const defaultVal = defaultAwesomeFunction('Dinesh');
 */
const defaultAwesomeFunction = name => {
  const returnStr = `I am the Default Awesome Function, fellow comrade! - ${name}`;
  return returnStr;
};

export default defaultAwesomeFunction;

const revert = (str, newStr) => {
  if(newStr == null)
    return revert(str, '');
  
  if(str.length === 0)
    return newStr;
    
  newStr += str.substr(str.length - 1);
  return revert(str.substr(0, str.length -1), newStr);
}

  /* ------------------------------------------- */
const revert2 = str => str.split('').reverse().join('');

  /* ------------------------------------------- */

const revert3 = str => {
  let newStr = '';
  for(let i = str.length - 1; i >= 0; i--){
	 	newStr += str[i];
  }
  return newStr;
}
 
  /* ------------------------------------------- */
 
const revert4 = str => (str === '') ? '' : revert4(str.substr(1)) + str.charAt(0);

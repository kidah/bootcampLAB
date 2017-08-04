'use strict';
let aritGeo = (array) => {
  const arithdiff = array[1] - array[0];
  const geodiff = array[1] / array[0];
  let isArit = true; let isGeo = true;

  for(let i = 0; i < array.length - 1; i++)
  {
    if(array[i+1] - array[i] !== arithdiff){
      isArit = false;
    }
    if(array[i+1] / geodiff !== array[i]){
      isGeo = false;
    }
  }

    if (Array.isArray(array) === false){
      return -1;
    }
    else if (array.length === 0){
      return 0;
    }
    else{
            if(isArit === true){
              return "Arithmetic";
            }
            else if(isGeo === true){
              return "Geometric";
            }
             else{
              return -1;
             }
    }
}
module.exports = aritGeo;
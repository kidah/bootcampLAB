 var aritGeo = function minaritGeo(items){
    arithdiff = items[1] - items[0];
    geodiff = items[1] / items[0];
    if (items.length == 0 ){
      return 0;
    }
    else{
      for (var i=2; i< items.length; i++){
       if((items[i] - items[i-1]) !== arithdiff && items.length > 2){
         for (var i=2; i< items.length; i++){
           if((items[i] / items[i-1]) !== geodiff && items.length > 2){
            return -1;
           }
           else{
             return 'Geometric';
           }
         }
       }
       else {
        return 'Arithmetic';
      }
    }
  }
 
    
}
module.exports = aritGeo;
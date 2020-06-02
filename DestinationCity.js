function swap(arry, i, j){
    var temp = arry[i];
    arry[i] = arry[j];
    arry[j] = temp;
}

while(true)
{
   console.log(JSON.stringify(vals));
   
   //STEP 1
   var maxI = -1;
   for(var i = 0; i < vals.length - 1; i++) {
       if(vals[i] < vals[i + 1]) {
           maxI = i;
       }
   }
  
   if(maxI == -1) {
       console.log('finished');
       break;
   }
  
       //STEP 2
       var maxJ = -1;
      for(var j = 0; j < vals.length; j++) {
  
          if(vals[maxI] < vals[j]) {
              maxJ = j;
          }
      }

          //STEP 3
          swap(vals, maxI, maxJ);
          //STEP 4: reverse from largestI + 1 to the end
          var endArray = vals.splice(maxI + 1);
          endArray.reverse();
          vals = vals.concat(endArray);
}

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    
};

destCity([["B","C"], ["D","B"],["C","A"]])
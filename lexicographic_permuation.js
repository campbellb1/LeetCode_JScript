//  var my_vals = [["B","C"], ["D","B"],["C","A"]];
 var my_vals = [["B","C"], ["Q", "X"]];

// var my_vals = [4, 3, 2, 1];
 var permutations = [];


 function swap(arry, i, j){
     var temp = arry[i];
     arry[i] = arry[j];
     arry[j] = temp;
 }

 function findPermutations(vals){
     vals = vals.sort();
    while(true)
    {
        permutations.push(JSON.stringify(vals));
        //STEP 1
        var maxI = -1;
        for(var i = 0; i < vals.length - 1; i++) {
            if(vals[i] < vals[i + 1]) {
                maxI = i;
            }
        }
    
        if(maxI == -1) {
            // console.log('finished');
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
    return permutations;
 }



 function checkForLogicalPath(path_to_check){
    path_to_check = JSON.parse(path_to_check);
    var path_valid = true;
    for(var i = 0; i < path_to_check.length - 1; i++)
    {
        // console.log(path_to_check[i][1]);
        // console.log(path_to_check[i + 1][0]);
        if(path_to_check[i][1] == path_to_check[i+1][0])
        {
            // console.log("Subroute was valid");
        }
        else
        {
            path_valid = false;
        }
    }
    if(path_valid)
    {
        // console.log(`${JSON.stringify(path_to_check)} is valid.`);
        // console.log(`Destination city is: ${path_to_check[path_to_check.length - 1][1]}`);
        return path_to_check[path_to_check.length - 1][1];
    }
    else
    {
        return 0;
    } 
}

function findDestinationCity(paths){
    var perm_list = findPermutations(paths);
    var validity = 0;
       for(var i = 0; i < perm_list.length; i++)
       {
           validity = checkForLogicalPath(perm_list[i]);
           if(validity != 0)
           {
              return validity;
           }
       }
       return "No path was found!";
 }

return findDestinationCity(my_vals);


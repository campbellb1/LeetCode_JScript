/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    numbers = [];
    letters = [];
    for (var i = 0; i < s.length; i++) {
      
      if(s.charCodeAt(i) > 47 && s.charCodeAt(i) < 58)
        {
            numbers.push(s.charAt(i));
        }
        else
        {
            letters.push(s.charAt(i));
        }
    }
    if(Math.abs(numbers.length - letters.length) > 1)
    {
        return "";
    }
    else
    {
        permutation = "";
        if(numbers.length > letters.length)
        {
            while(numbers.length > 0)
            {
                if(numbers.length > 0)
                {
                    permutation = permutation + numbers.pop();
                }
                if(letters.length > 0)
                {
                    permutation = permutation + letters.pop();
                }
            }
        }
        else
        {
            while(letters.length > 0)
            {
                if(letters.length > 0)
                {
                    permutation = permutation + letters.pop();
                }
                if(numbers.length > 0)
                {
                    permutation = permutation + numbers.pop();
                }
            }
        }
    }
    console.log(numbers);
    console.log(letters);
    return permutation;
};

console.log(reformat("abc123"));

// check if the greatest diff is +-1
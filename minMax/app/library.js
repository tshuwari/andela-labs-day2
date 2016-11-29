module.exports = {
findMinMax: function(arr){
    var maximum = arr[0];
    var minimum = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > maximum){
            maximum = arr[i];
        }
        if (arr[i] < minimum){
            minimum = arr[i];
        }
    }
    if (minimum === maximum){
        return [maximum];
    }
    else{
    return [minimum, maximum];
    }
}
    
}

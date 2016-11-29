module.exports = {
words: function(str){
  
  var  result = {};
   var arrayOfWords = str.replace(/[\r\n\s\t]/g, " ").replace("  "," ").split(" ");
   for(var i = 0; i < arrayOfWords.length; i++){
     var eachWord = arrayOfWords[i];

     var count   = 0;
     for(var j = 0; j < arrayOfWords.length; j++){
       if(eachWord === arrayOfWords[j]){
         count++;
       }
     }
     result[eachWord] = count;
   }
   return result;
}
}
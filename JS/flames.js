function charsCount(p1,p2){
  var coun = new Array(26);
  for (var i = 0; i < coun.length; i++) {
    coun[i] = 0;
  }
  for(var i = 0; i < p1.length; i++) {
    if(p1[i] != " "){
      coun[p1.charCodeAt(i)-97] = coun[p1.charCodeAt(i)-97]+1;
    }
  }
  for(var i = 0; i < p2.length; i++) {
    if(p2[i] != " "){
      coun[p2.charCodeAt(i)-97] = coun[p2.charCodeAt(i)-97]-1;
    }
  }
  var res = 0;
  for(var i = 0; i < coun.length; i++) {
    res = res + Math.abs(coun[i]);
  }
  return res;
}
function flames(p1,p2){
  count = charsCount(p1.toLowerCase(),p2.toLowerCase());
  var result = ["Friends","Love","Affection","Marriage","Enemy","Siblings"];
  while(result.length > 1){
    index = count%result.length - 1;
    if(index >= 0){
      var right = result.slice(index+1,result.length);
      var left = result.slice(0,index);
      result = right.concat(left);
    }
    else{
      result = result.slice(0,result.length-1);
    }
  }
  return result[0];
}
function trigger(){
  var p1 = document.getElementById('person1').value;
  var p2 = document.getElementById('person2').value;
  result = flames(p1,p2);
  document.getElementById('result').value= result;
}

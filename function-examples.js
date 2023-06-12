function getTotal (mark1,mark2,mark3){
  var total=mark1+mark2+mark3;
  var average=total/3;
  return average;
}

var res=getTotal(34,56,67);
console.log(res.toFixed(2))
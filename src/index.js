module.exports = function reverse (n) {
  if(n<0){
    n*=-1;
  }
  var res=0;
  for(;n>0;){
    res=res*10+n%10;
    n=Math.floor(n/10);
  }
  return res;
}

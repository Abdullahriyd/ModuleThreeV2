//**  Filtering Lowest Valu By (array.reduce) methode where total or 1st parameter is 1st time tests then use as accumulator or storage. And 2nd parameter use as variable.*/

var numbers = ['asdd','dd','jhhdj','ao','jbcc','bdugbu','gg'];

let lowestLength = numbers.reduce(function (total,num){
      let a,b;
      if (typeof total == 'string'){
        a=total.length;
        b=num.length;
      }else{ b=num.length;
              a=total;}
      return Math.min(a,b)
}
)

let result = numbers.filter(function(element){
  return element.length==lowestLength;
})

console.log(result);

//var numbers = ['asdd','dd','jhhdj','a','jbcc'];
//var numbers = [45,92,73,92,33,765,33];
//else{ return total=num}
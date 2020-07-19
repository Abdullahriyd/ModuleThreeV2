//**  Filtering Lowest Valu By (array.reduce) methode where total or 1st parameter is 1st time tests then use as accumulator or storage. And 2nd parameter use as variable.*/

var names = ['asdd','dd','jhhdj','ao','jbcc','bdugbu','gg'];

let lowestLength = names.reduce(function (measureLength,name){
      let a,b;
      if (typeof measureLength == 'string'){
        a=measureLength.length;
        b=name.length;
      }else{ b=name.length;
              a=measureLength;}
      return Math.min(a,b)
}
)

let result = names.filter(function(element){
  return element.length==lowestLength;
})

console.log(result);

//var numbers = ['asdd','dd','jhhdj','a','jbcc'];
//var numbers = [45,92,73,92,33,765,33];
//else{ return total=num}
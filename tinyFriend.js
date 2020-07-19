// *******************************************Tiny Frind Function Start*****************************************//

function tinyFriend( name ){

  if (Array.isArray( name) && name.length>0){

/*********************************** filtering process start *********************************************/
      // Removing Null(,) and blankString('')---Start !!

      let filtered = name.filter(function (el) {
          return el != null &&  el !=='';
        });

      // Removing Null(,) and blankString('')---End !!

      let newWorkingArry =[] ;  // Forming new fresh array like [ 'riyadh', 'asmot ullah khan', 'suvo hasan']

      //Removing Whitespace into Name to form newWorkingArray---Start !!

      for (let i=0; i<filtered.length; i++){

          let filteredString= '';

          let element = filtered[i];
          let workingString = element.trim();
          
          for(let i=0; i<workingString.length; i++){

              if(workingString[i] === ' ' && workingString[i-1]!== ' '){
                 filteredString = filteredString + workingString[i];
               }else{
                   if(workingString[i] === ' '){filteredString = filteredString;}
                   else {filteredString = filteredString+ workingString[i] ;}
               }
           }

           if(filteredString.length>0){
              newWorkingArry.push(filteredString);
           }
           
      }
      console.log('\nFiltered newWorkingArray', newWorkingArry);// wil be deleted
      //Removing Whitespace into Name to form newWorkingArray---End !!

/*********************************** filtering process End *************************************************/

/*********************************** Name Selection process Start ******************************************/

      let tinyName='';
      let measureLength =Infinity;
      
      for (let i=0; i<newWorkingArry.length; i++){

          if (newWorkingArry[i].length < measureLength){
              tinyName = newWorkingArry[i];
          
              measureLength = newWorkingArry[i].length
          }
      }
      let minNameLength = tinyName.length;

      let result = newWorkingArry.filter(function (el) {
          return el.length==minNameLength;
        });
/*********************************** Name Selection process End ******************************************/
/*********************************** Final Result ********************************************************/

      if(result<=0){return '\nPlease Enter A Name.'}
      else {return result;}
  }
  /** First condition's (Array.isArray( name) && name.length>0) return*/
  else {
      return '\nWarning !! Please Give An Array With Value .';
  }
}

let resultFriend = tinyFriend(['abu',,,'Asmot   Ullah Khan','  Hasan','Raz','   suvo  ','Imad Ali  ',' riyad ','Emon']);

console.log ('\nTiny Frind:\n', resultFriend ,'\n');

//let resultFriend = tinyFriend();
//let resultFriend = tinyFriend(['']);
//let resultFriend = tinyFriend(['   ']);
//let resultFriend = tinyFriend([,,]);
//let resultFriend = tinyFriend([,,'','',' ','   ',]);
//let resultFriend = tinyFriend(['  ','',,,'Asmot   Ullah Khan','    Hasan','   suvo  ','Imad Ali  ',' riyad ','Emon']);
//let resultFriend = tinyFriend(['abu',,'Asmot   Ullah Khan','  Hasan','Raz','   suvo  ','Imad Ali  ',' riyad ','Emon']);
//let resultFriend = tinyFriend(['a','ab',,'abc','Asmot   Ullah Khan','b', 'c','    Hasan','   suvo  ','Imad Ali  ',' riyad ','Emon']);

/**************************************************** End TinyFriend ******************************************************************************* */


//**  Filtering Lowest Valu By (array.reduce) methode where total or 1st parameter is 1st time tests then use as accumulator or storage. And 2nd parameter use as variable.*/

/** 
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
*/
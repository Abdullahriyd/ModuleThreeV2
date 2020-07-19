// Feet to Mile conversion function.....

function feetToMile (num) {
    let ft = +num;

    if ( isNaN (ft) )  {
        return -1 ;   
    }
    else if ( ft< 0){
        return -2 ;
    }
    else {
        const mile = ft * 0.000189394 ;
        return mile.toFixed(8) ;
    }   
}

let resultFeet = feetToMile (" 40 ") ;

if ( resultFeet == -1 ){
    console.log ("\nFeet to Mile conversion :\nWrong Input !! Please Enter Only Number.");
}else if (resultFeet == -2 ){
    console.log ("\nFeet to Mile conversion :\nNegative Input !! Plese Enter Positive Value.");    
}
else {
    console.log ("\nFeet To Mile Conversion :\nThe Result = "+ resultFeet +" Mile." ) ;
}


// Wood Calculator Fanction

function woodCalculator(chair, table, bed) {

    let Chair = +chair ;
    let Table = +table ;
    let Bed =  +bed ;


    if ( isNaN(Chair) || isNaN(Table) || isNaN(Bed) )  {
        return -1 ;   
    }
    else if ( Chair< 0 || Table<0 || Bed<0 ){
        return -2 ;
    }    
    else if ( Chair== 0 || Table==0 || Bed==0 ){
        return -3 ;
    }
    else {
        const totalWood = Chair*1 + Table*3 + Bed*5 ;
        return totalWood.toFixed(2) ;
    }

}

let resultWood = woodCalculator( " 8 ", " 5 ", " 8 ");


if ( resultWood == -1 ){
    console.log ("\nWood Calculator :\nWrong Input !! Please Enter Only Number.");
}else if (resultWood == -2 ){
    console.log ("\nWood Calculator :\nNegative Input !! Plese Enter Positive Value.");    
}else if (resultWood == -3 ){
    console.log ("\nWood Calculator :\n!! Plese Enter All Values.\n");    
}
else {
    console.log ("\nWood Calculator :\nTotal Wood Required = "+ resultWood +" ft3." ) ;
}


// Brick Calculator Function

function brickCalculator(num) {
    let floor = +num;

    if ( isNaN (floor) )  {
        return -1 ;   
    }
    else if ( floor< 0){
        return -2 ;
    }
    else {

        let brick1 =0 ;
        let brick2 =0 ;
        let brick3 =0 ;
        let extraValue =0 ;
        let stopper = 0;

        if(floor >20){
            extraValue = floor - 20 ;
            stopper= 20;
        }else{
            stopper = floor ;
        }

        brick3 = extraValue*10*1000;

        for(let i=1; i<=stopper ; i++){

        if ( i <=10){
            let height = i*15*1000 ;
            brick1 = height ;
        }

        else{
            let height = 12*1000 ;
            brick2 =brick2 + height ;
        }        
        
    }
      return brick1+brick2+brick3 ;  
    }   
}

let resultFloor = brickCalculator (" 60 ") ;

if ( resultFloor == -1 ){
    console.log ("\nBrick Calculator :\nWrong Input !! Please Enter Only Number.");
}
else if (resultFloor == -2 ){
    console.log ("\nBrick Calculator :\nNegative Input !! Plese Enter Positive Value.");    
}
else {
    console.log ("\nBrick Calculator :\nTotal Brick Required = "+ resultFloor +"." ) ;
}


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
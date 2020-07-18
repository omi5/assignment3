 
 function brickCalculator(floor){
    if (floor <=10){
        floor = floor *15;
        floor = floor*1000;
         return floor;
    }
    else if (floor >10 && floor<=20){
        floor=floor-10;
        floor=floor*12;
        floor =floor*1000;
         return floor;
   
    }
     else if (floor>20){
         floor=floor-20;
         floor=floor*10;
         floor=floor*1000;
         return floor;
     }
 }

 var result=brickCalculator(15);
 console.log(result);
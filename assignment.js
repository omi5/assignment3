// 1;

function feetToMile(feet) {
	if ( feet < (0)) {
		return 'input cannot be less than zero'; 
	} else {
		return (feet * 0.00018939 );
	}
}

// 2;

function woodCalculator(chair , table, bed){
    var woodNeedForChair = chair *1;
    var woodNeedForTable = table * 3;
    var woodNeedForBed = bed * 5;

    var sum = woodNeedForChair + woodNeedForTable +woodNeedForBed;

    return sum;
}

// 3;

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

 

// 4;

function tinyFriend(name){
    var smallest =name[0];
    
    for(var i =0; i<name.length;i++){
        var current = name[i];
        if(current>smallest){
            smallest=current;
        }
    }
    return smallest;
}
 
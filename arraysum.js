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
 
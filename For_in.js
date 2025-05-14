let user ={
    Name : "Chandan",
    Surname : "Yaduvanshi",
    Age : 20,
    Address : "M-4 Chanakya place part 2",
}

for( let key in user){
    console.log(key + " : " + user[key]);
    if( key == "Surname"){
        break;
    }
}
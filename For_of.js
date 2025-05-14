let positions = ["Owner", "Manager", "Hr", "Developer", "Tester", "Intern"];

for ( let vacancy of positions){
     if ( vacancy == "Owner"){
        console.log(vacancy + " name is sanjeev ");
        continue;
    }
    console.log("we are hiring for " + vacancy);
}

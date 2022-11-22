//==================Exercise #1 ==========//
// Write a function that takes in the string and the list of dog names, loops through 
// the list and checks that the current name is in the string passed in. The output should be:
// "Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
//
// let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
// let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(str, li){
    str = str.toLowerCase();
    let no_matches = true;
    for(let i = 0; i < li.length; i++){
        if (str.includes(li[i].toLowerCase())){
            no_matches = false;
            console.log(`Matched ${li[i]}`)
        }
    }
    if (no_matches == true){
        console.log(`No Matches`)
    }
}
findWords("Hello Max, my name is Dog, and I have purple eyes!", ["Max","HAS","PuRple","dog"])
// The same thing but without toLowerCase
function findWords2(str, li){
    str = str;
    let no_matches = true;
    for(let i = 0; i < li.length; i++){
        if (str.includes(li[i])){
            no_matches = false;
            console.log(`Matched ${li[i]}`)
        }
    }
    if (no_matches == true){
        console.log(`No Matches`)
    }
}
findWords2("Hello Max, my name is Dog, and I have purple eyes!", ["Max","HAS","PuRple","dog"])
//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

function replaceEvens(arr){
    for (i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            arr.splice(i, 1, 'even index')
        }
    }
    console.log(arr)
}

replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"])

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
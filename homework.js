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


// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.
// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

// def disemvowel(string_):
//     vowels = ['a', 'A', 'E', 'I', 'O', 'U', 'e', 'i', 'o', 'u']
//     result = ''.join([l for l in string_ if l not in vowels])
//     return result


function disemvowel(str) {
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++){
      if ('aeiou'.includes(arr[i].toLowerCase())){
        arr.splice(i, 1)
        i--
      }
    }
    return arr.join('');
  }

console.log(disemvowel("This website is for losers LOL!"));
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))
console.log(disemvowel("What are you, a communist?"))


// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// move_zeros([1, 0, 1, 2, 0, 1, 3]) # returns [1, 1, 2, 1, 3, 0, 0]

// def move_zeros(lst):
//     result = []
//     for item in lst:
//         if item != 0:
//             result.append(item)
//     diff = len(lst) - len(result)
//     for i in range(diff):
//         result.append(0)
//     return result

function moveZeros(arr) {
    for (let i = arr.length - 1; i >= 0; i--){
      if (arr[i] == 0){
        arr.splice(i, 1);
        arr.push(0);
      }
    }
    return arr;
}

  console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))
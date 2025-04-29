// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.


let health = 10
let damage= 5
let equal =5

function combat(health, damage, equal ) {
    // Write your code here
    health = health-damage
    equal=health
    if (equal>0){
   return  equal=health
    }else{
      return   equal = 0
    }
}


console.log( combat(100,112,80))
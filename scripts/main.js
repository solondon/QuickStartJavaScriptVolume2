/* Zoombie game mockup
Spec:
1. Present a Scenario from a list randomnly selected
2. User meets a zoombie - present a list of weapon choices
3. user has a 33% chance to survive being beaten
4. User presented a different scenario from those screenLeft
5. game ends when no more scenarios or user has died 

Amendments:
1. Use objects
2. Add parameter checking

*/

//generate a randomn whole number between 0 and range
function randomNumber(range) {
    if (typeof range === "number") {
        var num = Math.random();
        //console.log("generated randomn: " + num);
        num = Math.round(num * range);
        //console.log("ranged randomn: " + num);
        return (num);
    }
}

var player = {
    name: window.prompt("Wellcome traveler what is your name?"),
    weapon: "hand",
    scenario: 0,
    usedWeapons: [],
    completedScenarios: [],
    alive: true
};

//Initialization
// window.alert("Wellcome to the Game traveler ...");
var weapons = ["knife", "bow", "gun", "flamethrower"];
var scenarios = ["You wake up from acoma in a hospital bed, you hear a scratching at the door. Suddenly a zombie bursts into the room! you look around for a weapon and pickup a ...",
    "Alone in a dark room hidding, the door bursts open and a zombie spots you. You grab a ...",
    "still running being chased you duck into an alley, behing the bin a zombie goes for you. You only have to hand a ...",
    "It has you in its sight, you reach down and find on the floor a ..."
];

//var alive = true;

//Initial checking
if (!player.name) {
    //dint select a player name
    player.name = "Dumbo";
}

//loop until we die or win all scenarios
do {
    //Present a scenario
    player.scenario = randomNumber(scenarios.length - 1);
    console.log("Selected scenario: " + player.scenario);
    window.alert(scenarios[player.scenario]);

    //Weapon selection
    var pickedWeapon = prompt("Pick a weapon from the list " + player.name + "... " + weapons.toString());
    console.log("weapon picked: " + pickedWeapon);
    console.log("weapon indexOf: " + weapons.indexOf(pickedWeapon));

    // lets check its in the array and valid
    if (typeof pickedWeapon === "string" && weapons.indexOf(pickedWeapon)>=0) {
        player.weapon = pickedWeapon;
    } else {
        window.alert("Please type a weapon from the list next time, we picked the " + weapons[0] + " for you this time");
        player.weapon = weapons[0];
    }

    console.log("scenarios.length: " + scenarios.length);
    var survive = randomNumber(scenarios.length);
    console.log("Survive: " + survive);
    if (survive === 0) {
        alert("This time the " + player.weapon + " doesnt help you. The zoombie bites, time to die!!! The End ...");
        player.alive = false;
    } else {
        alert("You kill the zoombie with your " + player.weapon + " and continue onwards, Hooray!!!");
        player.usedWeapons.push(player.weapon);
        player.completedScenarios.push(scenarios[player.scenario]);

        //remove the used scenario and weapon from the list
        scenarios.splice(player.scenario, 1);
        weapons.splice(weapons.indexOf(player.weapon), 1);
        console.log("Removed scenario: " + player.scenario);
        console.log("Removed weapon: " + player.weapon);
    }
    console.log(player);
}
while (scenarios.length > 0 && player.alive);

//if we are still alive congratulate
if (player.alive) {
    window.alert("You live to fight another day. You have WON!!!!!!!!!!!!!!!");
}
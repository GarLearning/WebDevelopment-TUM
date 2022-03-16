console.log("For Loop")
for (n = 0; n < 5; n++) {
 console.log(n)
}

console.log("\nFor Loop, without statement on For")

n = 0

for (;;) {
 if(n >= 5) {
  break
 }
 console.log(n)
 n++
}

console.log("\nFor/In Loop")

var dicAgents = {first:"kayo", second:"Jett", third:"Cypher"}

for(let agent in dicAgents) {
 console.log(`The Agent is ${dicAgents[agent]}!!`)
}

console.log("\nFor/of Loop and with in get a index")

var listAgents = ["kayo", "Jett", "Cypher"]

for(let agent of listAgents) {
 console.log(`The Agent is ${agent}!!`)
}

for(let agent in listAgents) {
 console.log(`The Index on list Agent is ${agent}!!`)
}

console.log("\nDo/While Loop")

do{
 n++
 console.log(n)
} while (n < 10)

console.log("\nSwitch conditions")

hole = "misadd"

switch (hole) {
 case "top":
  console.log("Top example Camille!");
  break;
 case "jg":
  console.log("Jg example WW!");
  break;
 case "mid":
  console.log("Mid example Irelia!");
  break;
 case "adc":
   console.log("Adc example Vayne!");
   break;
 case "sup":
  console.log("Sup example Blitz!");
  break;
 default:
  console.log("Not a hole!")
}
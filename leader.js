function main() {
    var n = parseInt(readLine());
    scores = readLine().split(' ');
    scores = scores.map(Number);
    var m = parseInt(readLine());
    alice = readLine().split(' ');
    alice = alice.map(Number);
    // your code goes here
    let place = []
    allScores = scores.concat(alice)
    aliceHash = {}
    alice.forEach((el, i) => {
         if (aliceHash[el] === undefined){
             aliceHash[el] = [i]
         }
         else{
              aliceHash[el].push(i)
         }
    })
    scores = new Set(scores)
    let uniqScores = [...new Set(allScores)].sort((a,b) => (a-b)).reverse()
    for(let i = 0; i < uniqScores.length; i++){

    }
    let levels = 0
    uniqScores.forEach((el, i) => {
        if(aliceHash[el] !== undefined){
           aliceHash[el].forEach(item =>{
                place.push(i + 1 - levels)
           })
        }
           if(!scores.has(el)){
                levels += 1
           }
    })
    place.reverse().forEach(el => {
        console.log(el)
    })
}

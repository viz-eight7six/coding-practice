
function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    let hash = {}
    let maxVal, count = 0, prev;
    a.forEach(el => {
        if (hash[el] === undefined) {
            hash[el] = 1
        }
        else{
            hash[el] += 1
            if(hash[el] > count){
                count = hash[el]
                if(maxVal !== el){
                    prev = maxVal
                    maxVal = el
                }
            }
        }
    })
    if(hash[maxVal -1] === undefined && hash[maxVal +1] === undefined){
        count = hash[maxVal]
    }
    else if(hash[maxVal-1] === undefined){
        count = hash[maxVal] + hash[maxVal + 1]
    }
    else if(hash[maxVal +1] === undefined){
        count = hash[maxVal] + hash[maxVal - 1]
    }
    else if (hash[maxVal - 1] > hash[maxVal + 1] ){
        count = hash[maxVal] + hash[maxVal - 1]
    }
    else{
        count = hash[maxVal] + hash[maxVal + 1]
    }
    if( hash[prev-1] !== undefined){
        if (count < hash[prev] + hash[prev - 1] ){
        count = hash[prev] + hash[prev - 1]
        }
    }
    if( hash[prev+1] !== undefined){
        if (count < hash[prev] + hash[prev + 1]){
            count = hash[prev] + hash[prev + 1]
        }
    }
    if(count === undefined){
        count = 2
    }
    console.log(count)


}

function main() {
    var n = parseInt(readLine());
    c = readLine().split(' ');
    c = c.map(Number);
    let sockHash = {}
    let pairs = 0
    c.forEach(sock => {
        if (sockHash[sock] === undefined){
            sockHash[sock] = 1
        }
        else if (sockHash[sock] === 1){
            sockHash[sock] = 0
            pairs += 1
        }
        else{
            sockHash[sock] += 1
        }
    })
    console.log(pairs)

}

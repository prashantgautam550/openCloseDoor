

/**
 * 
 * hashMapp for door status
 * 4
 * 0000
 * |1 |2| 3| 4| 
 * 
 * 1 1 1 1
 * 
 * 1 0 1 0
 * 
 * 1 0 0 0
 * 
 * 1 0 0 1
 * 
 * .......
 * 1 | 1,2 | 1,3| 1,2,4 | 1,5 | 1,2,3,6 | 1,7 | 1,2,4,8 | 1,3,9 | 1,2,5,10| 1,1 | 1,2,3,4,6,12
 * 1,13 | 1,2,7,14| 1,3,5,15| 1,2,4,8,16 
 * 
 * 1  0  0 1 0 0 0 0 1 0 0 0 0 0 0 1
 * 
 * 
 * 
 */




//OPtimal solution
// N =number of door= number of person
// only number which have odd factors will have open doors and only perfect square number have odd numbers
function doorsOpenClosed(n) {
    let OpenDoors = parseInt(Math.sqrt(n));
    return {OpenDoors,close:n-OpenDoors};
}

console.log(doorsOpenClosed(25))


//Brute force solution
function doorsOpenClosed(n){
    let hash={}

    for(let i=1; i<=n; i++){
        for(let k=i; k<=n; k++){
            if(k%i==0){
                if(hash[k]){
                    hash[k]=0
                }else{
                    hash[k]=1
                }
            }
            
        }
    }
let arr=Object.keys(hash)
let open=0
let close=0
console.log(hash)
    for(let i=0; i<arr.length;i++){
        if(hash[arr[i]]){
            close++
        }else{
            open++
        }
    }
    return {close,open}
}

console.log(doorsOpenClosed(5))










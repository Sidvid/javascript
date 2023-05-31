function callMe (n){
    if(n < 0){
        console.log("Tata")
        return
    }
    console.log("n is " , n)
    callMe(n-1)
}
callMe(10)
let m=prompt("Enter m:");
let n=prompt("Enter n:");
if(m<=n){
    let sum=0;
    for(let i=m;i<=n;i++){
        sum+=i*i*i
    }
    console.log(sum)
}
else{
    console.log("0")
}

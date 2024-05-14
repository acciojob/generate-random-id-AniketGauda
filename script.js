function makeid(l) {
  // write your code here
	let str=`ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz`,p=10,ans="";
    for(let i=0;i<l;i++){
        let a = Math.floor(Math.random()*p)%62;
        ans+=str[a];
        p*=10;
    }
    return ans;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));

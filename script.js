function makeid(l) {
  // write your code here
	let str="",p=10;
    for(let i=0;i<l;i++){
        let a = Math.floor(Math.random()*p)%128;
        str+=String.fromCharCode(a);
        p*=10;
    }
    return str;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));

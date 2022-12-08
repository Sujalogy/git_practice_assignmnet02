// this is the prime number function ;
	let count = 0;
function prime(num) {
	for(let i = 0; i <= n; i++) {
		if(num % i === 0) {
		count++;
	    }
	}
	  
	if(count === 2) {
     console.log("yes, It's a prime");
    } else {
     console.log("no, it's not a prime");
    }
}

prime(13); 
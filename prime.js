// this is the prime number function ;

function prime(n) {
	let count = 0
	for(let i = 0; i <= n; i++) {
		if(n%i === 0) {
		count++;
	    }
	}
	  
	if(count <= 2) {
     console.log("Yes");
    } else {
     console.log("No");
    }
}

prime(13); 
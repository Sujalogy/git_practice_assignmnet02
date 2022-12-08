// this is the prime number function ;

function prime(n) {
	for(let i = 0; i <= n; i++) {
		if(i % n === 0) {
		count++;
	    }
	}
	  
	if(count === 2) {
     console.log(Yes);
    } else {
     console.log(No);
    }
}

prime(13); 
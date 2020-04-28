


function nrnum() {
	var sum=0;
	var no=parseInt(document.getElementById("fnr").value);
	
	if(no < 0) {
		document.getElementById("rez").innerHTML = "Negative numbers are not allowed";		
	}
	else {
		while(no > 0) {
			sum=sum+no%10;
			no=Math.floor(no/10);
		}
		document.getElementById("rez").innerHTML = sum;
	}
}
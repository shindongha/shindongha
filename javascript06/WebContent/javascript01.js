/**
 * 작성자 신동하
 */

function doA(){
	var i = 0;
	while(i<5){
		alert(i+"time warrinng");
		i++;
	}
}

function doB(){
	var arr = ["manggo","banana","apple","melon"];
	var targetDiv = document.getElementById("printDiv");
	targetDiv.innerHTML = "깔끔<br>";
	for(var i in arr){
		targetDiv.innerHTML += arr[i]+"<br>";
	}
}

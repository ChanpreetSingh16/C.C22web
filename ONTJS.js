function sfo() {
	var id = localStorage.getItem("userid");
	document.getElementById("userID").value = id;
	if(id === "#chanr14a260125") {
		 document.getElementById("specialId").style.display = "block";
		 document.getElementById("normalId").style.display = "none";
		 document.getElementById("usernotemain").innerHTML = "<div>Welcome Chanpreet Singh!</div>";
		 //document.getElementById("usernotemain").innerHTML = "<div>Hello<br><font>26/01/2025 12:00(IST)</font></div>";
	 }
	else if(id === "#r14a260125") {
		 document.getElementById("specialId").style.display = "block";
		 document.getElementById("normalId").style.display = "none";
		 document.getElementById("usernotemain").innerHTML = "<div>Welcome Mahika!</div>";
	 }
	else if(id === "sahaj260125") {
		 document.getElementById("normalId").style.display = "block";
		 document.getElementById("specialId").style.display = "none";
		 document.getElementById("usernotemain").innerHTML = "<div>Welcome Sahajpreet Singh!</div>";
	 }
	 else{
		 document.getElementById("specialId").style.display = "none";
		 document.getElementById("normalId").style.display = "none";
		 document.getElementById("usernotemain").innerHTML = "";
	 }
}
function usercheck() {
	var id = document.getElementById("userID");
	localStorage.setItem("userid", id.value);
	sfo();
}

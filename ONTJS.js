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
	else if(id === "#gursharan260125") {
		 document.getElementById("specialId").style.display = "block";
		 document.getElementById("normalId").style.display = "none";
		 document.getElementById("usernotemain").innerHTML = "<div>Welcome Gursharan Kaur!</div>";
	 }
	else if(id === "#nirvair260125") {
		 document.getElementById("specialId").style.display = "block";
		 document.getElementById("normalId").style.display = "none";
		 document.getElementById("usernotemain").innerHTML = "<div>Welcome Nirvair Singh!</div>";
	 }
	else if(id === "#akhil260125") {
		 document.getElementById("specialId").style.display = "block";
		 document.getElementById("normalId").style.display = "none";
		 document.getElementById("usernotemain").innerHTML = "<div>Welcome Akhil Sharma!</div>";
	 }
	else if(id === "#bhindi260125") {
		 document.getElementById("specialId").style.display = "block";
		 document.getElementById("normalId").style.display = "none";
		 document.getElementById("usernotemain").innerHTML = "<div>Welcome Sparsh!</div>";
	 }
	else if(id === "#coke260125") {
		 document.getElementById("specialId").style.display = "block";
		 document.getElementById("normalId").style.display = "none";
		 document.getElementById("usernotemain").innerHTML = "<div>Welcome Kumesh!</div>";
	 }
	else if(id === "sahaj260125") {
		 document.getElementById("normalId").style.display = "block";
		 document.getElementById("specialId").style.display = "none";
		 document.getElementById("usernotemain").innerHTML = "<div>Welcome Sahajpreet Singh!</div>";
	 }
	 else{
		 document.getElementById("specialId").style.display = "none";
		 document.getElementById("normalId").style.display = "none";
		 document.getElementById("usernotemain").innerHTML = "<div>Please create User ID to continue.</div>";
	 }
}
function usercheck() {
	var id = document.getElementById("userID");
	localStorage.setItem("userid", id.value);
	sfo();
}

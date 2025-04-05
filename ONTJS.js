function sfo() {
	checkWebScor();
	document.getElementById("userID").value = id;
	if(id === "#chanr14a260125") {
		 document.getElementById("specialId").style.display = "block";
		 document.getElementById("normalId").style.display = "none";
		 document.getElementById("useridcrtbt").style.display = "none";
		 document.getElementById("usernotemain").innerHTML = "<div>Welcome Chanpreet Singh!</div>";
		 //document.getElementById("usernotemain").innerHTML = "<div>Hello<br><font>26/01/2025 12:00(IST)</font></div>";
	 }
	else if(id === "#chanm84ik4170325") {
		 document.getElementById("specialId").style.display = "block";
		 document.getElementById("normalId").style.display = "none";
		 document.getElementById("useridcrtbt").style.display = "none";
		 document.getElementById("usernotemain").innerHTML = "<div>Welcome Chanpreet Singh!</div>";
	 }
	else if(id === "#2312130325170325") {
		 document.getElementById("specialId").style.display = "block";
		 document.getElementById("normalId").style.display = "none";
		 document.getElementById("useridcrtbt").style.display = "none";
		 document.getElementById("usernotemain").innerHTML = "<div>Welcome Founder!</div>";
	 }
	else if(id === "#r14a260125") {
		 document.getElementById("specialId").style.display = "block";
		 document.getElementById("normalId").style.display = "none";
		 document.getElementById("useridcrtbt").style.display = "none";
		 document.getElementById("usernotemain").innerHTML = "<div>Welcome Mahika!</div>";
	 }
	else if(id === "#gursharan260125") {
		 document.getElementById("specialId").style.display = "block";
		 document.getElementById("normalId").style.display = "none";
		 document.getElementById("useridcrtbt").style.display = "none";
		 document.getElementById("usernotemain").innerHTML = "<div>Welcome Gursharan Kaur!</div>";
	 }
	else if(id === "#nirvair260125") {
		 document.getElementById("specialId").style.display = "block";
		 document.getElementById("normalId").style.display = "none";
		 document.getElementById("useridcrtbt").style.display = "none";
		 document.getElementById("usernotemain").innerHTML = "<div>Welcome Nirvair Singh!</div>";
	 }
	else if(id === "#akhil260125") {
		 document.getElementById("specialId").style.display = "block";
		 document.getElementById("normalId").style.display = "none";
		 document.getElementById("useridcrtbt").style.display = "none";
		 document.getElementById("usernotemain").innerHTML = "<div>Welcome Akhil Sharma!</div>";
	 }
	else if(id === "#bhindi260125") {
		 document.getElementById("specialId").style.display = "block";
		 document.getElementById("normalId").style.display = "none";
		 document.getElementById("useridcrtbt").style.display = "none";
		 document.getElementById("usernotemain").innerHTML = "<div>Welcome Sparsh!</div>";
	 }
	else if(id === "#coke260125") {
		 document.getElementById("specialId").style.display = "block";
		 document.getElementById("normalId").style.display = "none";
		 document.getElementById("useridcrtbt").style.display = "none";
		 document.getElementById("usernotemain").innerHTML = "<div>Welcome Kumesh!</div>";
	 }
	else if(id === "#sahaj260125") {
		 document.getElementById("normalId").style.display = "none";
		 document.getElementById("specialId").style.display = "block";
		 document.getElementById("useridcrtbt").style.display = "none";
		 document.getElementById("usernotemain").innerHTML = "<div>Welcome Sahajpreet Singh!</div>";
	 }
	else if(id === "") {
		 document.getElementById("specialId").style.display = "none";
		 document.getElementById("normalId").style.display = "none";
		 document.getElementById("useridcrtbt").style.display = "block";
		 document.getElementById("usernotemain").innerHTML = '<div>Please create User ID to continue.</div>';
		 localStorage.setItem(userid, "");
	}
	 else{
		 document.getElementById("specialId").style.display = "none";
		 document.getElementById("normalId").style.display = "none";
		 document.getElementById("useridcrtbt").style.display = "block";
		 document.getElementById("usernotemain").innerHTML = '<div style="background:rgba(255,0,0,.4);">Invalid User ID!</div><div>Please create User ID to continue.</div>';
		 localStorage.setItem(userid, "");
	 }
	notifycate();
	 webvers();
	iconupd();
}
function checkWebScor() {
	if(localStorage.getItem("webscore") > 6){
		id = localStorage.getItem("userid2");
		userid = "userid2";
		document.getElementById("moreapps").innerHTML += '<a href="https://chanpreetsingh16.github.io/ONLINE/onconvert-6to7.html" target="_blank"><button id="appsbt" style="display:block;"><img src="https://chanpreetsingh16.github.io/ONLINE/ononlogo1.png"><br><font id="apppstp">ONLINE Converter</font></button></a>';
	}
	else{
		id = localStorage.getItem("userid");
		userid = "userid";
	}
}
function notifycate() {
	document.getElementById("onweventmain").innerHTML = '<div>Packup! Getting the Update on Sun Apr 06 2025(India Standard Time)<br><br><font>Fri Apr 04 2025 15:21:57 GMT+0530 (India Standard Time)</font></div>';
	document.getElementById("onweventmain").innerHTML += '<div>Logo of ONLINE Notes has been changed. You can download it for your shortcuts by the following link:- <a href="https://online2k23.github.io/ONLINE/onno2.png" target="_blank">New Logo</a> <br><br><font>Wed Feb 05 2025 18:23:46 GMT+0530 (India Standard Time)</font></div>';
}
	
function usercheck() {
	checkWebScor();
	var id2 = document.getElementById("userID");
	localStorage.setItem(userid, id2.value);
	sfo();
}
function webvers() {
	if(localStorage.getItem("webversion") === "ONW11V220.11.2025based_02_27.01.2025") {
		localStorage.setItem("webversstat", "Updated");
	}
	else{
		localStorage.setItem("webversstat", "Out of Date");
	}
}
function iconupd() {
	
}
function getLatestType() {
	document.getElementById("typediv").innerHTML = "7";
}

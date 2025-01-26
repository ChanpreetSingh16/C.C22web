function sfo() {
	usercheck();
}
function usercheck() {
	var id = document.getElementById("userID");
	 if(id.value === "#chanr14a260125") {
		 document.getElementById("specialId").style.display = "block";
		 document.getElementById("usernotemain").innerHTML = "<div>Hello<br><font>26/01/2025 12:00(IST)</font></div>";
	 }
}

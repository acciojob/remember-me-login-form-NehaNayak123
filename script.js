//your JS code here. If required.
document.addEventListener("DOMContentLoaded", ()=>{
	let userName=document.getElementById("username");
	let password=document.getElementById("password");
	let checkbox=document.getElementById("checkbox");
	let submit=document.getElementById("submit");
	let existing=document.getElementById("existing");

	let savedName=localStorage.getItem("username")
	let savedPassword=localStorage.getItem("password")
	if(savedName && savedPassword){
		existing.classList.remove("hidden")
	}

	submit.addEventListener("click", (e)=>{
		e.preventDefault();
		alert("Logged in as "+userName.value);
		if(checkbox.checked){
			localStorage.setItem("username", userName.value);
			localStorage.setItem("password", password.value);
		}
		else{
			localStorage.removeItem("username", userName.value);
			localStorage.removeItem("password", password.value);
			
		}
	})
	existing.addEventListener("click", ()=>{
		alert("Logged in as "+localStorage.getItem("username"))
	})
	
})








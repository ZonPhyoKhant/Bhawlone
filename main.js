const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function LoginUser()
    {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    google.script.run.withSuccessHandler(function(output) 
    {
      if(output == 'TRUE')
      {
         window.open('go:home');
      }
      else if(output == 'FALSE')
      {
        document.getElementById("errorMessage").innerHTML = "ထည့်သွင်းခြင်းမှားယွင်းနေပါတယ်";     
      }    
    }).checkLogin(username, password);
    }

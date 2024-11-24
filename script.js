document.getElementById("signup").addEventListener("submit",(event)=>{

    event.preventDefault()
        let nameRegExp = /^[a-zA-Z]{3,}$/
        let pswdRegExp = /^(?=(.*[a-z]){2,})(?=(.*[A-Z]){2,})(?=(.*\d){2,})(?=(.*[!@#$%^&*()_+]){2,})[a-zA-Z0-9!@#$%^&*()_+]{8,15}$/
    
        let RegExp = /^[a-zA-Z0-9._+-=]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
        document.getElementById("nameError").textContent=""
        document.getElementById("mailError").textContent=""
        document.getElementById("pswdError").textContent=""
    
        let name=document.getElementById("name").value.trim()
        let email=document.getElementById("email").value.trim()
        let pswd=document.getElementById("pswd").value.trim()
    
        let isSignup=true;
    
        if(!nameRegExp.test(name)){
        document.getElementById("nameError").textContent="pls enter at least 3 chars but  only smalls and caps"
        isSignup=false
        }
    
        if(!RegExp.test(email)){
        document.getElementById("mailError").textContent="pls enter valid email"
        isSignup=false
    
        }
    
        if(!pswdRegExp.test(pswd)){
        document.getElementById("pswdError").textContent="pls enter at least 8 char long password, but 2 small chars,  2 cpas chars. 2 symbol chars, 2 symbols needed"
        isSignup=false
    
        }
        if(isSignup){
          localStorage.setItem("email",email)
          localStorage.setItem("pswd",pswd)
          alert("signup done successfully")
        }
       })
        
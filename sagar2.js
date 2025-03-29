document.getElementById("myForm").addEventListener("submit", function(event) {
    // Prevent the form from submitting
    event.preventDefault();
    
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    
    let isValid = true;
    const name = document.getElementById("name").value;
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }


    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Please enter a valid email.";
        isValid = false;
    }
    if (isValid) {
        alert("Form submitted successfully!");
        
    }
});

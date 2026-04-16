document.getElementById("contact-form").addEventListener("submit",function(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let linkedin = document.getElementById("linkedin").value;
    let message = document.getElementById("message");
    // If validation passes, you can submit the form or perform further actions    
    console.log("User Contacted with Details : ",{name, email, linkedin, message});
    alert("Form submitted successfully!");
    document.getElementById("contact-form").reset(); // Reset the form
});
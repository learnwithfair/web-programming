// Get form inputs
const nameInput = document.getElementById("name");
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

// Define validation functions
function validateName(name) {
    const regex = /^[a-zA-Z]{6,}$/;
    return regex.test(name);
}

function validatePassword(password) {
    return password.length >= 6;
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePhone(phone) {
    const regex = /^\d{10}$/;
    return regex.test(phone);
}

// Define form submit event listener
const form = document.getElementById("registration-form");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const name = nameInput.value;
    const password = passwordInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;


    let isValid = true;
    if (!validateName(name)) {
        nameInput.classList.add("error");
        isValid = false;
    } else {
        nameInput.classList.remove("error");
    }
    if (!validatePassword(password)) {
        passwordInput.classList.add("error");
        isValid = false;
    } else {
        passwordInput.classList.remove("error");
    }
    if (!validateEmail(email)) {
        emailInput.classList.add("error");
        isValid = false;
    } else {
        emailInput.classList.remove("error");
    }
    if (!validatePhone(phone)) {
        phoneInput.classList.add("error");
        isValid = false;
    } else {
        phoneInput.classList.remove("error");
    }

    // Submit form if valid
    if (isValid) {
        const result = document.getElementById('show_result')
       
        result.innerHTML = `
         <ul>
			<li>
				${name}
			</li>
			<li>
				${password}
			</li>
			<li>
				${email}
			</li>
			<li>
				${phone}
			</li>
			
		</ul>
        
        `
        console.log(result);

    }

})

  // Validate inputs

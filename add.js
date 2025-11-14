// ===== CHARACTER COUNTER =====
const textarea = document.querySelector("textarea");
const counter = document.querySelector("small");

textarea.addEventListener("input", () => {
    const length = textarea.value.length;
    counter.textContent = `${length}/500 characters`;
});


// ===== FORM SUBMISSION =====
const form = document.querySelector(".application-form");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop default form submission

    // Optionally you can check required fields
    let valid = true;
    const requiredFields = form.querySelectorAll("input[required], select[required]");

    requiredFields.forEach(field => {
        if (field.value.trim() === "") {
            field.style.border = "2px solid red";
            valid = false;
        } else {
            field.style.border = "2px solid green";
        }
    });

    if (!valid) {
        alert("Please fill in all required fields correctly.");
        return;
    }

    // SUCCESS MESSAGE
    alert("🎉 Application submitted successfully!\nWe will contact you soon.");
    
    // Reset form after submit
    form.reset();
    counter.textContent = "0/500 characters";
});


document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const menuContent = document.querySelector(".menu-content");

    hamburger.addEventListener("click", function() {
        menuContent.classList.toggle("active");
    });
});
document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('reviewer-name').value;
    const reviewText = document.getElementById('review-text').value;
    const rating = document.getElementById('rating').value;

    const reviewDisplay = document.getElementById('reviews-display');
    reviewDisplay.innerHTML += `<div class="review">
                                    <h4>${name} (${rating} Stars)</h4>
                                    <p>${reviewText}</p>
                                </div>`;
    
    this.reset();
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('submit-admission');
    const receiptDiv = document.getElementById('receipt');
    
    // Check if form and receiptDiv are found
    console.log("Form:", form);
    console.log("Receipt Div:", receiptDiv);

    if (form && receiptDiv) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();  // Prevents the default form submission behavior
            
            // Retrieve form values
            const fullName = document.getElementById('fullName').value;
            const dateOfBirth = document.getElementById('dateOfBirth').value;
            const gender = document.getElementById('gender').value;
            const school = document.getElementById('school').value;
            const address = document.getElementById('address').value;
            const parentName = document.getElementById('parentName').value;
            const contactNumber = document.getElementById('contactNumber').value;
            const email = document.getElementById('email').value;
            const previousSchool = document.getElementById('previousSchool').value || "N/A";
            
            // Debugging form values
            console.log("Full Name:", fullName);
            console.log("Date of Birth:", dateOfBirth);
            console.log("Gender:", gender);
            console.log("School:", school);
            console.log("Address:", address);
            console.log("Parent Name:", parentName);
            console.log("Contact Number:", contactNumber);
            console.log("Email:", email);
            console.log("Previous School:", previousSchool);
            
            // Generate receipt content
            const receiptContent = `
                <h2>Admission Receipt</h2>
                <p><strong>Full Name:</strong> ${fullName}</p>
                <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>Selected School:</strong> ${school}</p>
                <p><strong>Address:</strong> ${address}</p>
                <p><strong>Parent/Guardian Name:</strong> ${parentName}</p>
                <p><strong>Contact Number:</strong> ${contactNumber}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Previous School:</strong> ${previousSchool}</p>
            `;
            
            // Insert the receipt content into the div
            receiptDiv.innerHTML = receiptContent;
            
            // Clear the form fields
            form.reset();
        });
    } else {
        console.error("Form or receipt div not found!");
    }
});


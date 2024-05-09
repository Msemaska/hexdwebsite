


document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.navLinks');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active'); // This should toggle the visibility
    });
});

document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    formProps.access_key = '5fd3f272-ff6f-410a-b25b-548a6911e3df';

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(formProps)
        });

        const result = await response.json();
        if (result.success) {
            document.getElementById('contactForm').style.display = 'none';
            document.getElementById('thankYouMessage').style.display = 'flex';
        } else {
            alert('Submission failed: ' + result.message);
        }
    } catch (error) {
        console.error('Submission error:', error);
        alert('Failed to submit the form. Please try again.');
    }
});






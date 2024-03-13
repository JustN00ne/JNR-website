        // JavaScript to show/hide error messages
        function validateForm() {
            var emailValue = document.querySelector('input[name="email"]').value.trim();
            var nameValue = document.querySelector('input[name="name"]').value.trim();
            var passwordValue = document.querySelector('input[name="password"]').value.trim();

            var emailErr = document.getElementById('emailErr');
            var nameErr = document.getElementById('nameErr');
            var passwordErr = document.getElementById('passwordErr');

            emailErr.style.display = emailValue === "" ? 'flex' : 'none';
            nameErr.style.display = nameValue === "" ? 'flex' : 'none';
            passwordErr.style.display = passwordValue === "" ? 'flex' : 'none';

            // Hide the error messages after 2 seconds
            setTimeout(function() {
                emailErr.style.display = 'none';
                nameErr.style.display = 'none';
                passwordErr.style.display = 'none';
            }, 2000);

            return emailValue !== "" && nameValue !== "" && passwordValue !== "";
        }
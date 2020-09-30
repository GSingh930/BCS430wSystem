
        // Defining a function to display error message
        function printError(elemId, hintMsg) {
            document.getElementById(elemId).innerHTML = hintMsg;
        }

        // Defining a function to validate form 
        function validateForm() {
            // Retrieving the values of form elements 
            var first = document.contactForm.first.value;
            var last = document.contactForm.last.value;
            var address = document.contactForm.address.value;
            var address2 = document.contactForm.address2.value;
            var cityTown = document.contactForm.cityTown.value;
            var zip = document.contactForm.zip.value;
            var email = document.contactForm.email.value;
            var mobile = document.contactForm.mobile.value;
            var state = document.contactForm.state.value;
            var password = document.contactForm.password.value;
            var password2 = document.contactForm.password2.value;
            var over18 = document.contactForm.over18;


            // Defining error variables with a default value
            var firstErr = lastErr = addressErr = address2Err = cityTownErr = zipErr = emailErr = mobileErr = stateErr =
                passwordErr = password2Err = over18Err = true;

            // ------------------------------------------------------------------------------------------------------------------

            // Validate first name
            if (first == "") {
                printError("firstErr", "Please enter your first name");
            } else {
                var regex = /^[a-zA-Z\s]+$/;
                if (regex.test(first) === false) {
                    printError("firstErr", "Please enter a valid first name");
                } else {
                    printError("firstErr", "");
                    firstErr = false;
                }
            }

            //Validate password
            if (password == "") {
                printError("passwordErr", "Please enter a password");
            } else {
                var regex = /^(?=.*\d).{8,}$/;
                if (regex.test(password) === false) {
                    printError("passwordErr", "Must be 8 characters long with 1 number.");
                } else {
                    printError("passwordErr", "");
                    passwordErr = false;
                }
            }

            //Validate confirm password
            if (password2 == "") {
                printError("password2Err", "Please enter a password");
            }
            else {
                if (password2 != password) {
                    printError("password2Err", "Passwords must match.");
                }
                else {
                    printError("password2Err", "");
                    password2Err = false;
                }
            }


            // Validate last name
            if (last == "") {
                printError("lastErr", "Please enter your last name");
            } else {
                var regex = /^[a-zA-Z\s]+$/;
                if (regex.test(last) === false) {
                    printError("lastErr", "Please enter a valid last name");
                } else {
                    printError("lastErr", "");
                    lastErr = false;
                }
            }

            // Validate address
            if (address == "") {
                printError("addressErr", "Please enter your address");
            } else {
                // Regular expression for basic address validation
                var regex = /^\d+\s[a-zA-Z\s]+$/;

                if (regex.test(address) === false) {
                    printError("addressErr", "Please enter a valid address");
                } else {
                    printError("addressErr", "");
                    addressErr = false;
                }
            }


            // Validate address2
            if (address2 == "") {
                address2Err = false;
                // Regular expression for basic address2 validation
            }
            else {
                var regex = /[a-zA-Z0-9\s]+$/;

                if (regex.test(address2) === false) {
                    printError("address2Err", "Please enter a valid address");
                } else {
                    printError("address2Err", "");
                    address2Err = false;
                }
            }

            // Validate city/town
            if (cityTown == "") {
                printError("cityTownErr", "Please enter your City/Town");
            } else {
                var regex = /^[a-zA-Z]+$/;
                if (regex.test(cityTown) === false) {
                    printError("cityTownErr", "Please enter a valid City/Town");
                } else {
                    printError("cityTownErr", "");
                    cityTownErr = false;
                }
            }

            // Validate Zip Code
            if (zip == "") {
                printError("zipErr", "Please enter your Zip Code");
            } else {

                // Regular expression for basic email validation
                var regex = /^\d{5}$|^\d{5}-\d{4}$/;
                if (regex.test(zip) === false) {
                    printError("zipErr", "Please enter a valid Zip Code");
                } else {
                    printError("zipErr", "");
                    zipErr = false;
                }
            }


            // Validate email address
            if (email == "") {
                printError("emailErr", "Please enter your email address");
            } else {

                // Regular expression for basic email validation
                var regex = /^\S+@\S+\.\S+$/;
                if (regex.test(email) === false) {
                    printError("emailErr", "Please enter a valid email address");
                } else {
                    printError("emailErr", "");
                    emailErr = false;
                }
            }


            // Validate mobile number
            if (mobile == "") {
                printError("mobileErr", "Please enter your mobile number");
            } else {
                var regex = /^[1-9]\d{9}$/;
                if (regex.test(mobile) === false) {
                    printError("mobileErr", "Please enter a valid 10 digit mobile number");
                } else {
                    printError("mobileErr", "");
                    mobileErr = false;
                }
            }

            // Validate state
            if (state == "") {
                printError("stateErr", "Please select your state");
            } else {
                printError("stateErr", "");
                stateErr = false;
            }

            if (!over18.checked) {
                printError("over18Err", "You must certify that you are over 18 years.");
                return false;
            } else {
                printError("over18Err", "");
                over18Err = false;
            }




            // Prevent the form from being submitted if there are any errors
            if ((firstErr || lastErr || addressErr || address2Err || cityTownErr || zipErr ||
                emailErr || mobileErr || stateErr || over18Err || passwordErr || password2Err) == true) {
                return false;
            } else {
                return true;
            }

        };
    
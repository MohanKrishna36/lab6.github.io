document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.querySelector('#profile-form');

    profileForm.addEventListener('submit', (event) => {
        // Custom validation functions for each field go here
        if (!validateFullName(profileForm.fullName) ||
            !validateStudentID(profileForm.studentID) ||
            !validateDateOfBirth(profileForm.dateOfBirth) ||
            !validateMobileNumber(profileForm.mobileNumber) ||
            !validateMajor(profileForm.major) ||
            !validateYearOfEnrollment(profileForm.yearOfEnrollment) ||
            !validateGraduationDate(profileForm.graduationDate) ||
            !validateEmergencyContactName(profileForm.emergencyContactName) ||
            !validateEmergencyContactRelationship(profileForm.emergencyContactRelationship) ||
            !validateEmergencyContactPhone(profileForm.emergencyContactPhone)) {
            event.preventDefault();
        }else{
            alert("Profile Updated!");
        }
        // Add more validation functions for other fields
    });

// Add an event listener to clear custom validity for all elements with class 'validate-input'
document.querySelectorAll('.validate-input').forEach(function(inputField) {
    inputField.addEventListener('input', function() {
        this.setCustomValidity('');
    });

    inputField.addEventListener('change', function() {
        if (!this.checkValidity()) {
            this.reportValidity(); // Display the custom validity message on 'change'
        }
    });
});


    function validateFullName(inputField) {
        const fullNameValue = inputField.value.trim();
        if (!/^[A-Za-z\s]+$/.test(fullNameValue)) {
            inputField.setCustomValidity('Only alphabetic characters and spaces are allowed.');
            return false;
        } else {
            inputField.setCustomValidity('');
            return true;
        }
    }

    function validateStudentID(inputField) {
        const studentIDValue = inputField.value.trim();
        if (!/^[A-Za-z0-9]{9}$/.test(studentIDValue) && !/^\d{11}$/.test(studentIDValue)) {
            inputField.setCustomValidity('Must be in the format "21mis7128" or 11 continuous numbers.');
            return false;
        } else {
            inputField.setCustomValidity('');
            return true;
        }
    }
    
    

    function validateDateOfBirth(inputField) {
        const dateOfBirthValue = inputField.value.trim();
        if (!/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}/.test(dateOfBirthValue)) {
            inputField.setCustomValidity('Use MM/DD/YYYY format.');
            return false;
        } else {
            inputField.setCustomValidity('');
            return true;
        }
    }

    function validateMobileNumber(inputField) {
        const mobileNumberValue = inputField.value.trim();
        if (!/^\d{10}$/.test(mobileNumberValue)) {
            inputField.setCustomValidity('Must be 10 digits.');
            return false;
        } else {
            inputField.setCustomValidity('');
            return true;
        }
    }

    function validateMajor(inputField) {
        const majorValue = inputField.value.trim();
        if (!/^[A-Za-z0-9\s]+$/.test(majorValue)) {
            inputField.setCustomValidity('Only alphanumeric characters and spaces are allowed.');
            return false;
        } else {
            inputField.setCustomValidity('');
            return true;
        }
    }

    function validateYearOfEnrollment(inputField) {
        const yearOfEnrollmentValue = inputField.value.trim();
        if (!/^\d{4}$/.test(yearOfEnrollmentValue)) {
            inputField.setCustomValidity('Use a 4-digit year.');
            return false;
        } else {
            inputField.setCustomValidity('');
            return true;
        }
    }

    function validateGraduationDate(inputField) {
        const graduationDateValue = inputField.value.trim();
        if (!/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}/.test(graduationDateValue)) {
            inputField.setCustomValidity('Use MM/DD/YYYY format.');
            return false;
        } else {
            inputField.setCustomValidity('');
            return true;
        }
    }

    function validateEmergencyContactName(inputField) {
        const emergencyContactNameValue = inputField.value.trim();
        if (!/^[A-Za-z\s]+$/.test(emergencyContactNameValue)) {
            inputField.setCustomValidity('Only alphabetic characters and spaces are allowed.');
            return false;
        } else {
            inputField.setCustomValidity('');
            return true;
        }
    }

    function validateEmergencyContactRelationship(inputField) {
        const emergencyContactRelationshipValue = inputField.value.trim();
        if (!/^[A-Za-z\s]+$/.test(emergencyContactRelationshipValue)) {
            inputField.setCustomValidity('Only alphabetic characters and spaces are allowed.');
            return false;
        } else {
            inputField.setCustomValidity('');
            return true;
        }
    }

    function validateEmergencyContactPhone(inputField) {
        const emergencyContactPhoneValue = inputField.value.trim();
        if (!/^\d{10}$/.test(emergencyContactPhoneValue)) {
            inputField.setCustomValidity('Must be 10 digits.');
            return false;
        } else {
            inputField.setCustomValidity('');
            return true;
        }
    }

    // Add more validation functions for other fields
});

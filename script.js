document.addEventListener('DOMContentLoaded', function() {
    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Logged in successfully!');
        });
    }

    // Handle signup form submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Account created successfully!');
        });
    }

    // Display subjects based on department
    const urlParams = new URLSearchParams(window.location.search);
    const department = urlParams.get('dept');
    const departmentSubjects = document.getElementById('departmentSubjects');

    if (departmentSubjects && department) {
        let subjects = [];

        switch (department) {
            case 'cse':
                subjects = ['Data Structures', 'Algorithms', 'Operating Systems', 'Database Management Systems'];
                break;
            case 'ece':
                subjects = ['Circuit Theory', 'Signals and Systems', 'Digital Electronics', 'Microprocessors'];
                break;
            case 'me':
                subjects = ['Thermodynamics', 'Strength of Materials', 'Fluid Mechanics', 'Heat Transfer'];
                break;
            default:
                subjects = ['No subjects available'];
        }

        let subjectList = '<ul>';
        subjects.forEach(subject => {
            subjectList += `<li>${subject}</li>`;
        });
        subjectList += '</ul>';

        departmentSubjects.innerHTML = subjectList;
    }
});

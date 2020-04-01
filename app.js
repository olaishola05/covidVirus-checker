document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#form-btn").onclick = () => {
        let email = document.querySelector("#userName").value;
        let name = document.querySelector("#username").value;
        let location = document.querySelector("#location").value;
        let address = document.querySelector("#userAddress").value;

        if (email == "" || name == "" || location == "" || address == "") {
            alert("Please filled all the fields");
            return false;
        }
        function checkRadio() {
            document.getElementById("form-btn").onclick = () => {
                let options = document.myForm.optionsRadios;
                let optLength = options.length;
                let i;

                for (i = 0; i < optLength; i++) {
                    if (options[0].checked == true) {
                        alert("pls self isolate");
                        break;
                    }

                    if (options[1].checked == true) {
                        const symptoms = document.querySelectorAll('input[name = "box"]:checked');
                        let box = [];
                        symptoms.forEach(symptom => {
                            box.push(symptom.value);

                            if (box.length > 1) {
                                alert("there's possibilities of " + name + " having covid-19, pls get tested");
                            }
                            if (!box[symptom]) {
                                alert(`hi ${name} theres possibility u dont have covid-19 since u 
                                don't have any symptoms`);
                            }
                        });
                        break;
                    } else {
                        alert("Pls select an option");
                        break;
                    }
                }
            };
        }
        checkRadio();
    };

    // checkRadio();
});

// document.querySelector("#form-btn").addEventListener("click", radioButton);

// const getDetails = () => {
//     let info = `Hello ${name} from the info u tested positive `;
// };
// getDetails();

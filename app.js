document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#form-btn").onsubmit = () => {
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
                        alert("pls self isolate for period of 14 days");
                        break;
                    }

                    if (options[1].checked == true) {
                        const symptoms = document.querySelectorAll('input[name = "box"]:checked');

                        let box = [];
                        symptoms.forEach((symptom) => {
                            box.push(symptom.value);

                            if (box.length > 0) {
                                alert("there's possibilities of " + name + " having covid-19, pls get tested");
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

        // function clearInput() {
        //     document.querySelector("#form-btn").onclick = () => {
        //         document.querySelector("#userName").value = "";
        //         document.querySelector("#username").value = "";
        //         document.querySelector("#location").value = "";
        //         document.querySelector("#userAddress").value = "";
        //         document.myForm.optionsRadios.checked = false;
        //         document.querySelectorAll("box").checked = false;

        //         document.querySelector("#form-content").reset();
        //     };
        // }
        // clearInput();
    };
});

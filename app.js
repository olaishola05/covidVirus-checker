document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#form-btn").onclick = function() {
        let email = document.querySelector("#userName").value;
        let name = document.querySelector("#username").value;
        let location = document.querySelector("#location").value;
        let address = document.querySelector("#userAddress").value;

        if (email == "" || name == "" || location == "" || address == "") {
            alert("Please filled all the fields");
            return false;
        }
    };
});

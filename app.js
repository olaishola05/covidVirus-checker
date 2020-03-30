document.querySelector("#form-content").addEventListener("DOMContentLoaded", function() {
    document.querySelector("#form-btn").onclick = function() {
        let email = document.querySelector("#exampleInputEmail1").value;
        let name = document.querySelector("#username").value;
        let location = document.querySelector("#location").value;
        let address = document.querySelector("#userAddress").value;

        if (email.length < 0 || name.length < 0 || location.length < 0 || address.length < 0) {
            alert("Please filled all the fields");
            return false;
        }
    };
});

var formEl = document.querySelector("#score-form");

function logSubmit(event) {
    event.preventDefault();

    var inputInitials = document.querySelector("input[name='input-initials']").value;
    console.log(inputInitials);

if (!inputInitials) {
alert("Please enter your initials to continue.");
return false;
}

    formEl.reset();

};

formEl.addEventListener("submit", logSubmit);
console.dir(formEl);
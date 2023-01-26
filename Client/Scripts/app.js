"use strict";
var core;
(function (core) {
    function testFullName() {
        let messageArea = $("#messageArea").hide();
        let fullNamePattern = /([A-Z][a-z]{1,25})+(\s|,|-)([A-Z][a-z]{1,25})+(\s|,|-)*/;
        $("#fullName").on("blur", function () {
            if (!fullNamePattern.test($(this).val().toString())) {
                $(this).trigger("focus").trigger("select");
                messageArea.show().addClass("alert alert-danger").text("Please enter a valid Full Name. This must include at least a Capitalized first name followed by a Capitlalized last name.");
            }
            else {
                messageArea.removeAttr("class").hide();
            }
        });
    }
    function testContactNumber() {
        let messageArea = $("#messageArea");
        let contactNumberPattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        $("#contactNumber").on("blur", function () {
            if (!contactNumberPattern.test($(this).val().toString())) {
                $(this).trigger("focus").trigger("select");
                messageArea.show().addClass("alert alert-danger").text("Please enter a valid Contact Number. Country code and area code are both optional");
            }
            else {
                messageArea.removeAttr("class").hide();
            }
        });
    }
    function testEmailAddress() {
        let messageArea = $("#messageArea");
        let emailAddressPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
        $("#emailAddress").on("blur", function () {
            if (!emailAddressPattern.test($(this).val().toString())) {
                $(this).trigger("focus").trigger("select");
                messageArea.show().addClass("alert alert-danger").text("Please enter a valid Email Address.");
            }
            else {
                messageArea.removeAttr("class").hide();
            }
        });
    }
    function formValidation() {
        testFullName();
        testContactNumber();
        testEmailAddress();
    }
    function displayContact() {
        formValidation();
        $("#sendButton").on("click", (event) => {
            let subscribeCheckbox = $("#subscribeCheckbox")[0];
            let fullName = $("#fullName")[0];
            let contactNumber = $("#contactNumber")[0];
            let emailAddress = $("#emailAddress")[0];
            if (subscribeCheckbox.checked) {
                let contact = new core.Contact(fullName.value, contactNumber.value, emailAddress.value);
                if (contact.serialize()) {
                    let key = contact.FullName.substring(0, 1) + Date.now();
                    localStorage.setItem(key, contact.serialize());
                }
            }
            location.href = '/contact';
        });
    }
    function displayContactList() {
        authGuard();
    }
    function displayLogin() {
        let messageArea = $("#messageArea");
        messageArea.hide();
        $("#loginButton").on("click", function () {
            let username = $("#username");
            let password = $("#password");
            let success = false;
            let newUser = new core.User();
            $.get("./Data/users.json", function (data) {
                for (const user of data.users) {
                    if (username.val() == user.Username && password.val() == user.Password) {
                        newUser.fromJSON(user);
                        success = true;
                        break;
                    }
                }
                if (success) {
                    sessionStorage.setItem("user", newUser.serialize());
                    messageArea.removeAttr("class").hide();
                    $("form").trigger("submit");
                }
                else {
                    username.trigger("focus").trigger("select");
                    messageArea.show().addClass("alert alert-danger").text("Error: Invalid login information");
                }
            });
        });
        $("#cancelButton").on("click", function () {
            document.forms[0].reset();
            location.href = '/home';
        });
    }
    function performLogout() {
        sessionStorage.clear();
        location.href = '/login';
    }
    function authGuard() {
        if (!sessionStorage.getItem("user")) {
            location.href = '/login';
        }
    }
    function display404() {
    }
    function Start() {
        let pageID = $("body")[0].getAttribute("id");
        switch (pageID) {
            case 'home':
                break;
            case 'about':
                break;
            case 'services':
                break;
            case 'projects':
                break;
            case 'contact':
                displayContact();
                break;
            case 'login':
                displayLogin();
                break;
            case 'logout':
                performLogout();
            case 'register':
                break;
            case 'contact-list':
                displayContactList();
                break;
        }
    }
    window.addEventListener("load", Start);
})(core || (core = {}));
//# sourceMappingURL=app.js.map
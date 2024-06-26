import $ from "jquery";
import { request } from "./API";

$(() => {
    const loginForm = $<HTMLDivElement>("#loginForm");
    const signupForm = $<HTMLDivElement>("#signupForm");

    const loginUsernameInput = $<HTMLInputElement>("#loginUsernameInput");
    const loginPasswordInput = $<HTMLInputElement>("#loginPasswordInput");
    const signupUsernameInput = $<HTMLInputElement>("#signupUsernameInput");
    const signupPasswordInput = $<HTMLInputElement>("#signupPasswordInput");
    const signupFirstNameInput = $<HTMLInputElement>("#signupFirstNameInput");
    const signupLastNameInput = $<HTMLInputElement>("#signupLastNameInput");

    // handle swapping between logging in and signing up
    $("#loginTabButton").on("click", () => {
        loginForm.removeClass("inactive");
        signupForm.addClass("inactive");
    });
    $("#signupTabButton").on("click", () => {
        loginForm.addClass("inactive");
        signupForm.removeClass("inactive");
    });

    $("#loginButton").on("click", () => {
        request("Login",
            {
                username: loginUsernameInput.val(),
                password: loginPasswordInput.val(),
            },
            (response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    });

    $("#signUpButton").on("click", () => {
        request("RegisterUser",
            {
                username: signupUsernameInput.val(),
                password: signupPasswordInput.val(),
                name_first: signupFirstNameInput.val(),
                name_last: signupLastNameInput.val(),
            },
            (response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    });
});

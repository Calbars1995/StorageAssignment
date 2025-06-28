window.addEventListener("DOMContentLoaded", program); //waits for the whole thing to load, otherwise caused issues

function program(){ //whole script is inside the wait for load
    //declaring variables for the inputs and buttons
    let username = document.getElementById("username");
    let saveButton = document.getElementById("save-btn");
    let clearButton = document.getElementById("clear-btn");
    let welcomeUser = document.getElementById("WelcomeUser");
    let displayName = document.getElementById("display-name");

    showName(); //calls the function that displays the name, or a default message
    saveButton.addEventListener("click", saveUsername); //if the save button is clicked, calls the save function
    clearButton.addEventListener("click", clearName); //if the clear button is clicked, calls the clear function

    function showName(){ //function to display name or default
        if (localStorage.getItem("username")){ //if we have the name in storage already
            //display the name at the top and bottom
            welcomeUser.textContent = `Welcome ${localStorage.getItem("username")}!`;
            displayName.textContent = `Your name is: ${localStorage.getItem("username")}`;
            
        }else{ //if there is no name stored
            defaults(); //call defaults function
            }
    }

    function saveUsername(){ //save the name
        localStorage.setItem("username", username.value); //saves the name
        showName(); //changes displays
        username.value = ""; //clears the text box
    }

    function clearName(){ //clear the storage
        localStorage.removeItem("username"); //removes name from storage
        defaults(); //calls default function
    }
    
    function defaults(){ //function that will display a default message if no name is in storage
        //top and bottom default messages
        welcomeUser.textContent = "Welcome!";
        displayName.textContent = "Your name will show here.";
    }
}





function controlRocket() {
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const miles = document.getElementById("spaceShuttleHeight");
    const rocketShip = document.getElementById("rocket");

    takeoffButton.addEventListener("click", () => {
        let confirm = window.confirm("Confirm that the shuttle is ready for takeoff");
        if (confirm) {
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.background = "blue";
            miles.innerHTML = "10,000";
        };
    });

    landingButton.addEventListener("click", ()=> {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.background = "green";
        miles.innerHTML = "0";
    });

    abortButton.addEventListener("click", ()=> {
        let confirmAbort = window.confirm("Confirm that you want to abort the mission.");
        if (confirmAbort) {
            flightStatus.innertHTML = "Mission aborted.";
            shuttleBackground.style.background = "green";
            miles.innerHTML = "0";
        };
    });

    
    

};

    
    


//Page loading check
window.addEventListener("load", controlRocket);
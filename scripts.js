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
    const rocketHeight = miles.innerHTML;
    let currentHeight = Number(rocketHeight);

    takeoffButton.addEventListener("click", () => {
        let confirm = window.confirm("Confirm that the shuttle is ready for takeoff");
        if (confirm) {
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.background = "blue";
            miles.innerHTML = "10000";
            rocketShip.style.top = "250px";
            rocketShip.style.left = "350px";
        };
    });

    landingButton.addEventListener("click", ()=> {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.background = "green";
        miles.innerHTML = "0";
        rocketShip.style.top = "250px";
        rocketShip.style.left = "350px";
    });

    abortButton.addEventListener("click", ()=> {
        let confirmAbort = window.confirm("Confirm that you want to abort the mission.");
        if (confirmAbort) {
            flightStatus.innertHTML = "Mission aborted.";
            shuttleBackground.style.background = "green";
            miles.innerHTML = "0";
            rocketShip.style.top = "250px";
            rocketShip.style.left = "350px";
        };
    });

    rocketShip.style.top = "250px";
    rocketShip.style.left = "350px";

    downButton.addEventListener("click", ()=> {
        if (parseInt(rocketShip.style.top) < 250) {
            rocketShip.style.top = parseInt(rocketShip.style.top) + 10 + 'px';
            miles.innerHTML = currentHeight -= 10000;
            // console.log(rocketShip.style.top);
        };
    });

    upButton.addEventListener("click", ()=> {
        if (parseInt(rocketShip.style.top) > -10) {
            rocketShip.style.top = parseInt(rocketShip.style.top) - 10 + 'px';
            miles.innerHTML = currentHeight += 10000;
            // console.log(rocketShip.style.top);
        };
    });

    leftButton.addEventListener("click", ()=> {
        if (parseInt(rocketShip.style.left) > -20) {
            rocketShip.style.left = parseInt(rocketShip.style.left) - 10 + 'px';
            console.log(rocketShip.style.left);
        };
    });

    rightButton.addEventListener("click", ()=> {
        if (parseInt(rocketShip.style.left) < 710) {
            rocketShip.style.left = parseInt(rocketShip.style.left) + 10 + 'px';
            console.log(rocketShip.style.left);
        };
    });

    
    

};

    
    


//Page loading check
window.addEventListener("load", controlRocket);
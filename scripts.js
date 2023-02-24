// Write your JavaScript code here.
// Remember to pay attention to page loading!
document.addEventListener("DOMContentLoaded", function() {

    
    const rocket = document.getElementById("rocket");
    
    const takeoffButton = document.getElementById("takeoff");

    const landingButton = document.getElementById("landing");
    
    const abortMissionButton = document.getElementById("missionAbort");

    const upButton = document.getElementById("up");

    const downButton = document.getElementById("down");
    
    const leftButton = document.getElementById("left");
    
    const rightButton = document.getElementById("right");
    
    const flightStatus = document.getElementById("flightStatus");
    
    const shuttleBackground = document.getElementById("shuttleBackground");

    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");


    takeoffButton.addEventListener("click", function() {
        if (confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatus.textContent = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.textContent = "10000";

            landingButton.addEventListener("click", function() {
                alert("The shuttle is landing. Landing gear engaged.");
                flightStatus.textContent = "The shuttle has landed.";
                shuttleBackground.style.backgroundColor = "green";
                spaceShuttleHeight.textContent = "0";
            });

            abortMissionButton.addEventListener("click", function() {
                confirm("Confirm that you want to abort the mission.");
                flightStatus.textContent = "Mission aborted.";
                shuttleBackground.style.backgroundColor = "green";
                spaceShuttleHeight.textContent = "0"; 
            });

            upButton.addEventListener("click", function() {
                spaceShuttleHeight.textContent = parseInt(spaceShuttleHeight.textContent) + 10000;

                let currentTop = rocket.getAttribute("style");
                
                let nextTop = currentTop.split('p');

                currentTop = nextTop[1].slice(2);

                rocket.style.top = (parseInt(currentTop) - 10) + "px";

            });

            downButton.addEventListener("click", function() {
                spaceShuttleHeight.textContent = parseInt(spaceShuttleHeight.textContent) - 10000;

                let currentTop = rocket.getAttribute("style");
                
                let nextTop = currentTop.split('p');

                currentTop = nextTop[1].slice(2);

                rocket.style.top = (parseInt(currentTop) + 10) + "px";
                
            });

            leftButton.addEventListener("click", function() {
                let currentLeft = rocket.getAttribute("style");
                
                let nextLeft = currentLeft.split('p');

                currentLeft = nextLeft[2].split(":")
                let test = currentLeft[1].slice(1);

                rocket.style.left = (parseInt(test) - 10) + "px";
            });

            rightButton.addEventListener("click", function() {
           
                let currentLeft = rocket.getAttribute("style");
                
                let nextLeft = currentLeft.split('p');

                currentLeft = nextLeft[2].split(":")
                let test = currentLeft[1].slice(1);
                if (parseInt(test) < 560) {

                rocket.style.left = (parseInt(test) + 10) + "px"; 
                }
            });
        };
    });
});

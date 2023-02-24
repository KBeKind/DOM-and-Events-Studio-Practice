// Write your JavaScript code here.
// Remember to pay attention to page loading!
document.addEventListener("DOMContentLoaded", function () {


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

    rocket.style.top = "250px";
    rocket.style.left = "280px";

    takeoffButton.addEventListener("click", function () {
        if (confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatus.textContent = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.textContent = "10000";
            rocket.style.top = "240px";


            landingButton.addEventListener("click", function () {
                alert("The shuttle is landing. Landing gear engaged.");
                flightStatus.textContent = "The shuttle has landed.";
                shuttleBackground.style.backgroundColor = "green";
                spaceShuttleHeight.textContent = "0";
                rocket.style.top = "250px";
                rocket.style.left = "280px";
            });

            abortMissionButton.addEventListener("click", function () {
                confirm("Confirm that you want to abort the mission.");
                flightStatus.textContent = "Mission aborted.";
                shuttleBackground.style.backgroundColor = "green";
                spaceShuttleHeight.textContent = "0";
                rocket.style.top = "250px";
                rocket.style.left = "280px";
            });

            upButton.addEventListener("click", function () {

                let currentTop = rocket.getAttribute("style");
                let nextTop = currentTop.split(' ');
                currentTop = nextTop[1].slice(0,-3);

                if (currentTop > 30) {
                    rocket.style.top = (parseInt(currentTop) - 10) + "px";
                    spaceShuttleHeight.textContent = parseInt(spaceShuttleHeight.textContent) + 10000;
                }

            });

            downButton.addEventListener("click", function () {

                let currentTop = rocket.getAttribute("style");

                let nextTop = currentTop.split(' ');
                currentTop = nextTop[1].slice(0, -3);
                if (currentTop < 250) {
                    spaceShuttleHeight.textContent = parseInt(spaceShuttleHeight.textContent) - 10000;
                    rocket.style.top = (parseInt(currentTop) + 10) + "px";
                }
            });

            leftButton.addEventListener("click", function () {
                let currentLeft = rocket.getAttribute("style");
                let nextLeft = currentLeft.split(' ');
                currentLeft = nextLeft[3].slice(0, -3);
                if (parseInt(currentLeft) > 15) {
                    rocket.style.left = (parseInt(currentLeft) - 10) + "px";
                }
            });

            rightButton.addEventListener("click", function () {
                let currentLeft = rocket.getAttribute("style");
                let nextLeft = currentLeft.split(' ');
                currentLeft = nextLeft[3].slice(0,-3);
                if (parseInt(currentLeft) > 15) {
                    rocket.style.left = (parseInt(currentLeft) + 10) + "px";
                }
            });
        };
    });
});

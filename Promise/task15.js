function wait(ms){
    return new Promise((resolve) => setTimeout(() => {resolve()}, ms ))
}

function trafficLights(){
    wait(3000)
    .then(() => {console.log("red");
        return wait(1000);})
    .then(() => {console.log("yellow"); 
        return wait(2000);
    })
    .then(() => {console.log("green");
        return wait(0);
    })
    .then(() => trafficLights())
}

trafficLights();
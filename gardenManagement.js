const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

//function for turning water on depending on temp
if(temperature > 80){
    console.log("Watering on")
}
else{
    console.log("Watering off")
}

//function for turning lights on depending on time of day
if(timeOfDay === "evening" || timeOfDay === "night"){
    console.log("Lights on")
}
else{
    console.log("Lights off")
}

//function for logging and increasing soil moisture %
while(soilMoisture < 40){
    soilMoisture += 5
    console.log(soilMoisture)
}
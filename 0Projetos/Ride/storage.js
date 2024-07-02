function createNewRide(){
    const rideId = Date.now()
    const rideRecord = {
        data:[],
        startTime: rideId,
        stopTime:null

    }
    saveRideRecord(rideId, rideRecord)
    return rideId
}

function getAllRides(){
    return Object.entries(localStorage)

}



function getRideRecord(rideId){
    return JSON.parse(localStorage.getItem(rideId))
}
function saveRideRecord(rideId,rideRecord){
    localStorage.setItem(rideId,JSON.stringify(rideRecord))
}

function addPosition(rideId,positon){
    const rideRecord = getRideRecord(rideId)
    const newData = {
        accuracy:positon.coords.accuracy,
        altitude:positon.coords.altitude,
        altitudeAccuracy:positon.coords.altitudeAccuracy,
        heading:positon.coords.heading,
        latitude:positon.coords.latitude,
        longitude:positon.coords.longitude,
        speed:positon.coords.speed,
        timestamp:positon.timestamp,
    }
    console.log(positon.coords)
    rideRecord.data.push(newData)
    saveRideRecord(rideId,rideRecord)
}

function updateStopTime(rideId){
    const rideRecord = getRideRecord(rideId)
    rideRecord.stopTime = Date.now()
    saveRideRecord(rideId,rideRecord)
}
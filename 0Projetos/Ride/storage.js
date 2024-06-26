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
function getRideRecord(rideId){
    return JSON.parse(localStorage.getItem(rideId))
}
function saveRideRecord(rideId,rideRecord){
    localStorage.setItem(rideId,JSON.stringify(rideRecord))
}

function addPosition(rideId,positon){
    
    const rideRecord = getRideRecord(rideId)
    const newData = {
        accurancy:positon.coords.accurancy,
        altitude:positon.coords.altitude,
        altitudeAcurrancy:positon.coords.altitudeAcurrancy,
        heading:positon.coords.heading,
        latitude:positon.coords.latitude,
        longitutude:positon.coords.longitutude,
        speed:positon.coords.speed,
        timestamp:positon.timestamp,
    }
    rideRecord.data.push(newData)
    saveRideRecord(rideId,rideRecord)
}

function updateStopTime(rideId){
    const rideRecord = getRideRecord(rideId)
    rideRecord.stopTime = Date.now()
    saveRideRecord(rideId,rideRecord)
}
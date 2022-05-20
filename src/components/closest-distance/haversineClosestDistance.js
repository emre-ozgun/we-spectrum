import { data } from '../../data';


let closestObject = data[0];
let closestDistance = Infinity;


export const calculateClosestDistance = (userCoords) => {
  const { lat, long } = userCoords;


  if (!lat || !long) {
    return;
  }

  for (let i = 0; i < data.length; i++) {


    const currentDistance = distance({ latitude: lat, longitude: long },
      { latitude: Number(data[i].latitude), longitude: Number(data[i].longitude) }
    )


    if (currentDistance < closestDistance) {
      closestDistance = currentDistance;
      closestObject = data[i];
    }

  }
  return closestObject;

}

// Haversine formula to calculate the distance between two coordinates (using lat and long)
export function distance(position1, position2) {



  var lat1 = position1.latitude;
  var lat2 = position2.latitude;
  var lon1 = position1.longitude;
  var lon2 = position2.longitude;
  var R = 6371000; // metres
  var φ1 = toRadians(lat1);
  var φ2 = toRadians(lat2);
  var Δφ = toRadians(lat2 - lat1);
  var Δλ = toRadians(lon2 - lon1);

  var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  var d = R * c;
  return d;
}

function toRadians(degrees) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}


// var closest=locations[0];
// var closest_distance=distance(closest,position.coords);
// for(var i=1;i<locations.length;i++){
//     if(distance(locations[i],position.coords)<closest_distance){
//          closest_distance=distance(locations[i],position.coords);
//          closest=locations[i];
//     }
// }

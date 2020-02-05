//consts
const body = document.querySelector("body");
const mymap = L.map("mapid").setView([51.505, -0.09], 13);
let currentPolyline = null;



//leaflet stuff
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    accessToken:
      "pk.eyJ1IjoiY2hhcmx5ZmxhdGlyb24iLCJhIjoiY2s1bW9lbnQ3MGducjNycWl5b3cxNnpnayJ9.xCGIYxp4_LVQTo6ALIqI8A"
  }
).addTo(mymap);

//functions
const renderMapFromPolylineString = polylineString => {
  currentPolyline ? mymap.removeLayer(currentPolyline) : null;
  var encodedRoutes = [polylineString];
  for (let encoded of encodedRoutes) {
    var coordinates = L.Polyline.fromEncoded(encoded).getLatLngs();

    let polyline = L.polyline(coordinates, {
      color: "blue",
      weight: 2,
      opacity: 0.7,
      lineJoin: "round"
    }).addTo(mymap);
    mymap.fitBounds(polyline.getBounds());
    currentPolyline = polyline;
  }
};



gsap.to("#bike-svg", { duration: 2, x: "400px" });


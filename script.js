//consts
const body = document.querySelector("body");
const mymap = L.map("mapid").setView([51.505, -0.09], 13);

// API
// curl -X GET "https://www.strava.com/api/v3/athlete/activities?per_page=30" -H "accept: application/json" -H "authorization: Bearer 95d6ec555de69f80da67c5e8dd703f15d0c5b562"

const get = () => {
  return fetch("http://localhost:3000/rides")
    .then(resp => resp.json())
    .then(activities => renderActivityCard(activities));
};

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

var encodedRoutes = [
  "um_yHdnFa@kAi@eCBgARgB?Q]m@iAo@kCcCoH{FoCgB{@E{FXYVcAjBk@bBmCnIq@lDEBmFoDsDaDeAaBiBuBmAw@oB_@oCHaBXiAf@sBdCkA|@aQnFeB\\q@S_@[u@c@m@UcDy@oBKuAFmAj@yBT{@EkCw@{F}@{Ac@cC}CeEmIUUyGvI_CjD{@vBi@jC?dBR|BpEbZE\\SRaAJiD~@OT@fAIZ}EjB}BTkBfAkBlBgAhBaAlCOLgDe@QJQfB_AjDA|@TxBAd@aAvF_@f@O@c@[gA{AgCkAqETiCKGBY|@M@}Bg@gB{@YN}AbBwBxDeBzEsAdGqBpKBnBm@vN[nAd@fFOjDSpBl@`IB`@KP{Bz@s@DSt@ODuMg@Wb@a@`IE^SP_HqAo@T{DrCcDNoGn@qBdAKXUxD_AbGm@|Bg@nAKp@y@|C{DrIqBdIsB`Gy@nBoFpJqBrF[vAk@zDqDfJYfBa@~AmDtLs@xC?ZKpAm@rDSjCOHsAi@gM}CoAg@Ka@g@CuBuAmAYe@l@kBrAqDjDiCtA[|@[b@iC~@mCbBc@By@YoCsAeHcCq@[UWoBOaB}@}@_A_@Lo@hBKtAa@bA]Ng@sCk@_AnGbCKFy@FLu@QQDkAHe@TQPAiAzBrDlAtCj@j@v@?R`Bb@zFF`@HZW`EyA~BMj@P^gAd@i@fGwBnAgAXa@CKJUZ[xBIjBx@dH|@`NnCvAfAfAh@t@|@dFjJ|AvArAtBhAnAtC`Ah@UbA}@l@_AnCoA`A[dBqA|FuGx@o@z@a@dC_Dv@_B~@qArByBzCmC`@iAn@eDP[j@Wx@Pv@c@fGwHxAqAdDwEpAsAxDaHxDqIvCgInBuDlBcFn@kArAIhIRzDUpADHIVeCR]b@WXGnDf@`@IlBs@p@c@~FeBpBiAdDq@nFqA`Ac@pAcAvDa@dDo@r@g@bBg@\\Bh@QdEGd@B^XlBK`Bw@tC_CbHeErCuAtBcBjAaBfAiA\\MvDLrBKfHeDhCiB^Dl@k@t@aARm@pD{G~@}BdAgBfAqDl@iCrBwFjBkI~AsFn@yF@{@QgFEuESoDF]nDgFDU{BwGGc@`@_AnDgF`@u@nBwInBkEtAcCbB}DZuAz@_GPu@TS^NfGzDd@HXs@t@iGJKd@@PUxCq@dAIxBHrB~@~@t@Zl@|@r@`@E|BkACk@YeBGEYR"
];

for (let encoded of encodedRoutes) {
  var coordinates = L.Polyline.fromEncoded(encoded).getLatLngs();

  let polyline = L.polyline(coordinates, {
    color: "blue",
    weight: 2,
    opacity: 0.7,
    lineJoin: "round"
  }).addTo(mymap);
  mymap.fitBounds(polyline.getBounds());
}

const renderActivityCard = activities => {
  d3.select(".chart")
    .selectAll("div")
    .data(activities)
    .enter()
    .append("div")
    .style("width", "0")
    .transition()
    .duration(2000)
    .style("width", function(d) {
      return (d.distance/1000) * 10 + "px";
    })
    .style("background-color", function(d) {
      if (d.distance / 1000 <= 20) {
        return "aquamarine";
      } else if (d.distance / 1000 >= 20 && d.distance / 1000 <= 50) {
        return "darkturquoise";
      } else if (d.distance / 1000 >= 50) {
        return "darkcyan";
      }
    })
      .text(function (d) {
        let formattedDistance = (d.distance/1000).toFixed(1)
      return `${formattedDistance}km`;
    });

  d3.selectAll("div").on("click", function(d, i) {
    console.log(d);
  });
};

const init = () => {
  get();
};

init();

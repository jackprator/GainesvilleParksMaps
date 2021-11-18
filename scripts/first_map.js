const mymap = L.map('map').setView([29.620020, -82.346485], 12.5);

// 12.24
// -82.346485, 29.620020
// https://api.mapbox.com/styles/v1/jackprator/ckw3pli2z0n1s15of8x48ygb3/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamFja3ByYXRvciIsImEiOiJja3czcGNmbHM4bjYyMm5zMWdsaDg4OHRsIn0.SmtHCgBGdozIbWaRPgEPww

L.tileLayer('https://api.mapbox.com/styles/v1/jackprator/ckw3pli2z0n1s15of8x48ygb3/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamFja3ByYXRvciIsImEiOiJja3czcGNmbHM4bjYyMm5zMWdsaDg4OHRsIn0.SmtHCgBGdozIbWaRPgEPww', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

let sweetwater = L.marker([29.619620, -82.329390]).addTo(mymap);
sweetwater.bindPopup("<b>Sweetwater Wetlands Park</b><br>Open from 7 a.m. to dusk.").openPopup();

let ufcenter = L.marker([29.634680, -82.367332]).addTo(mymap);
ufcenter.bindPopup("<b>UF Teaching Center Lab Trails</b><br>Open 24 hours.");

let bivensarm = L.marker([29.618970, -82.335400]).addTo(mymap);
bivensarm.bindPopup("<b>Bivens Arm Nature Park</b><br>Open 9 a.m. to 5 p.m.");

let splitrock = L.marker([29.637820, -82.391730]).addTo(mymap);
splitrock.bindPopup("<b>Split Rock Conservation Area</b><br>Temporarily closed.");

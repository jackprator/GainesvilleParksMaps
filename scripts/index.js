const trailmap = L.map('naturemap').setView([29.620020, -82.346485], 11);

// 12.24
// -82.346485, 29.620020
// https://api.mapbox.com/styles/v1/jackprator/ckw3pli2z0n1s15of8x48ygb3/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamFja3ByYXRvciIsImEiOiJja3czcGNmbHM4bjYyMm5zMWdsaDg4OHRsIn0.SmtHCgBGdozIbWaRPgEPww

L.tileLayer('https://api.mapbox.com/styles/v1/jackprator/ckw3pli2z0n1s15of8x48ygb3/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamFja3ByYXRvciIsImEiOiJja3czcGNmbHM4bjYyMm5zMWdsaDg4OHRsIn0.SmtHCgBGdozIbWaRPgEPww', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(trailmap);

 for ( let i=0; i < places.length; i++ ){
   L.marker( [ places[i].latitude, places[i].longitude ] )
      .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].descrip + '</p>')
      .addTo( trailmap )};

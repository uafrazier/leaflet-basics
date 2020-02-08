//header map
var header_map = L.map("header_map", {
  scrollWheelZoom: false,
  zoomControl: false
}).setView([43.64701, -79.39425], 15);

var mbAttr =
    'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',
  mbUrl = "https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png";

L.tileLayer(mbUrl, { id: "uafrazier.o3ecma8l", attribution: mbAttr }).addTo(
  header_map
);

//basic leaflet map
var map = L.map("map").setView([43.64701, -79.39425], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//map with scroll wheel deactivated
var mapa = L.map("mapa", { scrollWheelZoom: false }).setView(
  [43.64701, -79.39425],
  15
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapa);

//map with WMS layer(s)
var mapWms = L.map("mapWms", { scrollWheelZoom: false }).setView(
  [43.64701, -79.39425],
  3
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapWms);

var nexrad = L.tileLayer
  .wms("https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
    layers: "nexrad-n0r-900913",
    format: "image/png",
    transparent: true,
    attribution: "Weather data © 2012 IEM Nexrad"
  })
  .addTo(mapWms); //this example from leaflet documentation

//map with default leaflet marker
var map1 = L.map("map1", { scrollWheelZoom: false }).setView(
  [43.64701, -79.39425],
  15
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map1);

var marker = L.marker([43.64701, -79.39425]).addTo(map1);

//map with custom marker
var map2 = L.map("map2", { scrollWheelZoom: false }).setView(
  [43.64701, -79.39425],
  15
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map2);

var firefoxIcon = L.icon({
  iconUrl: "imgs/firefox.svg",
  iconSize: [38, 95] // size of the icon
});

L.marker([43.64701, -79.39425], { icon: firefoxIcon }).addTo(map2);

//map with custom marker and a popup
var map3 = L.map("map3", { scrollWheelZoom: false }).setView(
  [43.64701, -79.39425],
  15
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map3);

var firefoxIcon = L.icon({
  iconUrl: "imgs/firefox.svg",
  iconSize: [38, 95] // size of the icon
});

L.marker([43.64701, -79.39425], { icon: firefoxIcon })
  .bindPopup("Mozilla Toronto Offices")
  .addTo(map3);

//map with customized marker and a custom styled popup, html img element added to popup
var map5 = L.map("map5", { scrollWheelZoom: false }).setView(
  [43.64701, -79.39425],
  15
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map5);

var firefoxIcon = L.icon({
  iconUrl: "imgs/firefox.svg",
  iconSize: [38, 95], // size of the icon
  popupAnchor: [0, -15]
});

var customPopup =
  "Mozilla Toronto Offices<br/><img src='imgs/maptime.gif' alt='maptime logo gif' width='200px'/>";

var customOptions = {
  maxWidth: "500",
  className: "custom",
  autoPan: "false"
};

L.marker([43.64701, -79.39425], { icon: firefoxIcon })
  .bindPopup(customPopup, customOptions)
  .addTo(map5);

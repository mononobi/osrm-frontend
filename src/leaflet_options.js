'use strict';

var L = require('leaflet');

var mapboxTileURL = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
    mapboxAttribution = '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
    mapboxToken = 'pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg',
    osmAttribution = '© <a href="https://www.openstreetmap.org/copyright/en">OpenStreetMap</a> contributors',
    waymarkedtrailsAttribution = '© <a href="http://waymarkedtrails.org">Sarah Hoffmann</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)';

var streets = L.tileLayer(mapboxTileURL, {
    attribution: mapboxAttribution,
    tileSize: 512,
    zoomOffset: -1,
    id: 'mapbox/streets-v11',
    accessToken: mapboxToken
  }),
  outdoors = L.tileLayer(mapboxTileURL, {
    attribution: mapboxAttribution,
    tileSize: 512,
    zoomOffset: -1,
    id: 'mapbox/outdoors-v11',
    accessToken: mapboxToken
  }),
  satellite = L.tileLayer(mapboxTileURL, {
    attribution: mapboxAttribution,
    tileSize: 512,
    zoomOffset: -1,
    id: 'mapbox/satellite-streets-v11',
    accessToken: mapboxToken
  }),
  osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: osmAttribution,
  }),
  osm_de = L.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', {
    attribution: osmAttribution,
  }),
  hiking = L.tileLayer('https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png', {
    attribution: waymarkedtrailsAttribution,
  }),
  bike = L.tileLayer('https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png', {
    attribution: waymarkedtrailsAttribution,
  }),
  small_components = L.tileLayer('https://tools.geofabrik.de/osmi/tiles/routing/{z}/{x}/{y}.png', {});

module.exports = {
  defaultState: {
    center: L.latLng(53.550341,10.000654),
    zoom: 13,
    waypoints: [],
    language: 'en',
    alternative: 0,
    layer: osm
  },
  services: [{
    label: 'Car (fastest)',
    path: 'https://168.119.189.104/nav/route/v1'
  }],
  layer: [{
    'openstreetmap.org': osm,
    'openstreetmap.de.org': osm_de,
    'Mapbox Streets': streets,
    'Mapbox Outdoors': outdoors,
    'Mapbox Streets Satellite': satellite
  }],
  overlay: {
    'Hiking': hiking,
    'Bike': bike,
    'Small Components': small_components
  },
  baselayer: {
    one: osm,
    two: osm_de,
    three: streets,
    four: outdoors,
    five: satellite
  }
};

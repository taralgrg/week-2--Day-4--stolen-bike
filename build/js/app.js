(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var apiKey = "AIzaSyBEtEATtLkkkmRKrW0EgApS7iYFlxce8yg";





$(document).ready(function() {
  $('#map').append("<script async defer src='https://maps.googleapis.com/maps/api/js?key=" + apiKey + "&callback=initMap'>" +
  "</script>");

    var map;
    window.initMap = function () {
      var uluru = {lat: -25.363, lng: 131.044};
      map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    };
});

},{}]},{},[1]);

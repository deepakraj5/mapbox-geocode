var btn = document.getElementById("btn")
var place = document.getElementById("place")

btn.addEventListener("click", function() {
    search(place.value)
})

var geocodeAPI = '2f6cbe150cfc40249510ce23e708d050'

let mapBox = (lng, lat) => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2FubmFuMSIsImEiOiJja2Y0MXQ5bmswOHY4Mnpsd240cDZqZXJtIn0.4Frbn2XimSPp4dx2QavTKw';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat], // starting position [lng, lat]
        zoom: 10 // starting zoom
    });
}

let search = (place) => {
    fetch('https://api.opencagedata.com/geocode/v1/json?q='+ place + '&key=' + geocodeAPI + '&limit=1').then((response) => {
        var res = response.json()
        res.then((res) => {
            var lng = res.results[0].geometry.lng
            var lat = res.results[0].geometry.lat
            mapBox(lng, lat)
        }).catch((err) => {
            console.log(err)
        })
    }).catch((e) => {
        console.log(e)
    })
}
function initMap() {
  var latlng = new google.maps.LatLng(39.305, -76.617);
  var map = new google.maps.Map(document.getElementById('googlemaps'), {
    zoom: 4,
    center: latlng
  });
  var marker = new google.maps.Marker({
    position: latlng,
    map: map
  });
}

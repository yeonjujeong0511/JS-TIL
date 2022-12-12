const mapOptions = {
  center: new naver.maps.LatLng(37.3595704, 127.105399),
  zoom: 15,
};

const map = new naver.maps.Map("map", mapOptions);

const marker = new naver.maps.Marker({
  position: mapOptions.center,
  map: map,
});

// 클릭한 위치로 마커 옮기기
// naver.maps.Event.addListener(map, "click", function (e) {
//   marker.setPosition(e.coord);
// });

console.log(map);

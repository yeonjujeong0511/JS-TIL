const API_KEY = config.apikey;
//const mapDiv = document.getElementById("map");

const mapCenter = new naver.maps.LatLng(37.3595704, 127.105399);

const map = new naver.maps.Map("map", {
    center: mapCenter,
    zoom: 15,
  }),
  infoWindow = null;

const marker = new naver.maps.Marker({
  position: mapCenter,
  map: map,
});

//클릭한 위치로 마커 옮기기
// naver.maps.Event.addListener(map, "click", function (e) {
//   marker.setPosition(e.coord);
// });

//console.log(mapDiv);

// function initGeocoder() {
//   let latlng = map.getCenter();
//   let utmk = naver.maps.TransCoord.fromLatLngToUTMK(latlng); // 위/경도 => UTMK
//   let tm128 = naver.maps.TransCoord.fromUTMKToTM128(utmk); // UTMK ->TM128
//   let naverCoord = naver.maps.TransCoord.fromTM128ToNaver(tm128); // TM128 -> NAVER

//   infoWindow = new naver.maps.InfoWindow({
//     content: "",
//   });

//   map.addListener("click", function (e) {
//     let latlng = e.coord,
//       utmk = naver.maps.TransCoord.fromLatLngToUTMK(latlng),
//       tm128 = naver.maps.TransCoord.fromUTMKToTM128(utmk),
//       naverCoord = naver.maps.TransCoord.fromTM128ToNaver(tm128);

//     utmk.x = parseFloat(utmk.x.toFixed(1));
//     utmk.y = parseFloat(utmk.y.toFixed(1));

//     infoWindow.setContent(
//       [
//         '<div style="padding:10px;width:380px;font-size:14px;line-height:20px;">',
//         "<strong>LatLng</strong> : " + "좌 클릭 지점 위/경도 좌표" + "<br />",
//         "<strong>UTMK</strong> : " +
//           "위/경도 좌표를 UTMK 좌표로 변환한 값" +
//           "<br />",
//         "<strong>TM128</strong> : " +
//           "변환된 UTMK 좌표를 TM128 좌표로 변환한 값" +
//           "<br />",
//         "<strong>NAVER</strong> : " +
//           "변환된 TM128 좌표를 NAVER 좌표로 변환한 값" +
//           "<br />",
//         "</div>",
//       ].join("")
//     );

//     infoWindow.open(map, latlng);
//     console.log("LatLng: " + latlng.toString());
//     console.log("UTMK: " + utmk.toString());
//     console.log("TM128: " + tm128.toString());
//     console.log("NAVER: " + naverCoord.toString());
//   });
// }

// naver.maps.onJSContentLoaded = initGeocoder;

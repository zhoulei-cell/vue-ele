
class PointData {
  constructor(data) {
    this.citycode = data.addressComponent.citycode
    this.city = data.addressComponent.city
    this.formattedAddress = data.formattedAddress
  }
}

let isAMapLoad = false
function AMapLoader() {
  return new Promise(resolve => {
    if (isAMapLoad) {
      resolve(window.AMap)
    } else {
      isAMapLoad = true
      var url = 'https://webapi.amap.com/maps?v=1.4.15&key=624be6536d4534e167b1b203f1864604&callback=AMapLoad'
      var jsapi = document.createElement('script')
      jsapi.charset = 'utf-8'
      jsapi.src = url
      document.head.appendChild(jsapi)
    }
    window.AMapLoad = function () {
      resolve(window.AMap)
    }
  })
}

function pinPoint() {
  return new Promise((resolve, reject) => {
    AMapLoader().then(AMap => {
      AMap.plugin('AMap.Geolocation', function() {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: 'RB'
        })
        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', onComplete)
        AMap.event.addListener(geolocation, 'error', onError)

        function onComplete (data) {
          // data是具体的定位信息
          resolve(new PointData(data))
        }
        function onError (data) {
          // 定位出错
          reject(data)
        }
      })
    })
  })
}

function notPinPoint() {
  return new Promise((resolve, reject) => {
    AMapLoader().then(AMap => {
      AMap.plugin('AMap.CitySearch', function () {
        var citySearch = new AMap.CitySearch()
        citySearch.getLocalCity(function (status, result) {
          if (status === 'complete' && result.info === 'OK') {
            // 查询成功，result即为当前所在城市信息
            // var reg = /(?:^|)(\d+(?:\.\d+)?),(\d+(?:\.\d+)?)(?:;|$)/g;
            // var lnglat = result.rectangle;
            // var matchRes = reg.exec(lnglat)
            // var lnglat = [matchRes[1], matchRes[2]]
            var lnglat = result.rectangle.split(';')[0].split(',')
            AMap.plugin('AMap.Geocoder', function() {
              var geocoder = new AMap.Geocoder({
                // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
                city: result.adcode
              })

              geocoder.getAddress(lnglat, function(status, result) {
                if (status === 'complete' && result.info === 'OK') {
                  // result为对应的地理位置详细信息
                  resolve(new PointData(result.regeocode))
                } else {
                  reject(result)
                }
              })
            })
          }
        })
      })
    })
  })
}

function placeSearch(keyword) {
  return new Promise(resolve => {
    AMapLoader().then(AMap => {
      AMap.plugin('AMap.Autocomplete', function() {
        // 实例化Autocomplete
        var autoOptions = {
          // city 限定城市，默认全国
          city: '全国'
        }
        var autoComplete = new AMap.Autocomplete(autoOptions)
        autoComplete.search(keyword, function(status, result) {
          // 搜索成功时，result即是对应的匹配数据
          resolve(result)
        })
      })
    })
  })
}

export default {
  pinPoint,
  notPinPoint,
  placeSearch
}

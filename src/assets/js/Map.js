/*
 * @Author: lee
 * @Date: 2021-03-24 16:39:37
 * @LastEditTime: 2021-03-24 16:46:46
 * @FilePath: \ziru-demo\src\assets\js\Map.js
 */
// AMap.js
// 高德map   https://webapi.amap.com/maps?v=1.4.11&key=你的高德地图的key
export default function MapLoader () {
  return new Promise((resolve, reject) => {
    if (window.AMap) {
      resolve(window.AMap)
    } else {
      var script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src =
        'http://webapi.amap.com/maps?v=1.4.11&callback=initAMap&key=9fd014bd3d0447cbf516b0e8c0712f5a'
      script.onerror = reject
      document.head.appendChild(script)
    }
    window.initAMap = () => {
      resolve(window.AMap)
    }
  })
}

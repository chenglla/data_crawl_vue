// 深拷贝
export function deepClone (original) {
  return JSON.parse(JSON.stringify(original))
}
export function msg (_this, msg, width = '100px', time = 2000) {
  _this.$vux.toast.show({
    width: width,
    time: time,
    text: msg
  })
}
export function errorMsg (_this, msg, width = '200px', time = 2000) {
  _this.$vux.toast.show({
    type: 'cancel',
    width: width,
    time: time,
    text: msg
  })
}
export function userGetDate () {
  const d = new Date()
  return d.getFullYear() + '-' + getZeroDate((Number(d.getMonth()) + 1)) + '-' + getZeroDate(d.getDate())
}
export function getZeroDate (i) {
  if (Number(i) < 10) {
    return '0' + i
  } else {
    return i
  }
}

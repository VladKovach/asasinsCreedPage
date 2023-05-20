let hedersToFadeShow = document.querySelector('.h1Section').querySelectorAll('h1')
let arrayFromHeaders = [
  hedersToFadeShow[0],
  hedersToFadeShow[1],
  hedersToFadeShow[2],
  hedersToFadeShow[3],
  hedersToFadeShow[4],
]

let imagesToSlie = document.querySelector('.allAsasansImg').querySelectorAll('img')
let firstBack = imagesToSlie[0]

let secondBack = imagesToSlie[1]

let thirdBack = imagesToSlie[2]

let fourthBack = imagesToSlie[3]

let fifthBack = imagesToSlie[4]

let arayFromNode = [firstBack, secondBack, thirdBack, fourthBack, fifthBack]

function hide(elem) {
  elem.style.display = 'none'
}
function fadeHide(elem) {
  $(elem).fadeOut(1500)
}
function fadeShow(elem) {
  $(elem).fadeIn(1500)
}
for (i = 2; i >= 0; i--) {
  hide(imagesToSlie[i])
}

setInterval(function () {
  let elemDisplayValue
  for (x = 0; x < arayFromNode.length; x++) {
    let img = arayFromNode[x]
    let header = arrayFromHeaders[x]
    elemDisplayValue = img.style.display
    if (elemDisplayValue != 'none') {
      fadeHide(img)
      fadeHide(header)
      hide(header)
      return
    }
  }
}, 4000)

setInterval(function () {
  let elemDisplayValue1
  for (x = 0; x < arayFromNode.length; x++) {
    let img = arayFromNode[x]
    let header = arrayFromHeaders[x]
    elemDisplayValue1 = img.style.display
    if (elemDisplayValue1 != 'none') {
      let curentimgNumber = arayFromNode.indexOf(img)
      let curentHeaderNumber = arrayFromHeaders.indexOf(header)
      fadeShow(arayFromNode[(curentimgNumber + 1) % 5])
      fadeShow(arrayFromHeaders[(curentHeaderNumber + 1) % 5])

      return
    }
  }
}, 4000)

let videoAsasins = document.querySelector('.allAsasansDiv').querySelectorAll('iframe')

let videoPlayComponents = {
  a: [
    (a1 = document.getElementById('a1')),
    (a2 = document.getElementById('a2')),
    (a3 = document.getElementById('a3')),
    (a4 = document.getElementById('a4')),
    (a5 = document.getElementById('a5')),
    (a6 = document.getElementById('a6')),
    (a7 = document.getElementById('a7')),
    (a8 = document.getElementById('a8')),
    (a9 = document.getElementById('a9')),
    (a10 = document.getElementById('a10')),
    (a11 = document.getElementById('a11')),
    (a12 = document.getElementById('a12')),
  ],
  videos: [
    (vid1 = videoAsasins[0]),
    (vid2 = videoAsasins[1]),
    (vid3 = videoAsasins[2]),
    (vid4 = videoAsasins[3]),
    (vid5 = videoAsasins[4]),
    (vid6 = videoAsasins[5]),
    (vid7 = videoAsasins[6]),
    (vid8 = videoAsasins[7]),
    (vid9 = videoAsasins[8]),
    (vid10 = videoAsasins[9]),
    (vid11 = videoAsasins[10]),
    (vid12 = videoAsasins[11]),
  ],
}
let som = '#a7'
let curentHrefSrc
for (i = 0; i < videoPlayComponents.a.length; i++) {
  let a = videoPlayComponents.a[i]
  a.onclick = function (e) {
    curentHrefSrc = e.srcElement.id
    hrefFunk()
  }
}
let autoplay = '?autoplay=1'
function hrefFunk() {
  let indexOfElem = Number(curentHrefSrc.replace(/^\D+/g, ''))
  videoPlayComponents.videos[indexOfElem - 1].src += autoplay
}

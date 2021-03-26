const MINUTES = 60
const HOURS   = 60 * MINUTES
const DAYS    = 24 * HOURS

const elements   = {
  days   : document.getElementById('days'),
  hours  : document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds')
}
let previousDiff = {}
const countdown  = document.querySelector('#countdown')
const launchDate = Date.parse(countdown.dataset.time) / 1000

function refreshCountDown () {
  const differenceDate = launchDate - Date.now() / 1000
  const diff           = {
    days   : Math.floor(differenceDate / DAYS),
    hours  : Math.floor(differenceDate % DAYS / HOURS),
    minutes: Math.floor(differenceDate % HOURS / MINUTES),
    seconds: Math.floor(differenceDate % MINUTES)
  }
  updateDom(diff)
  window.setTimeout(() => {
    window.requestAnimationFrame(refreshCountDown)
  }, 1000)
}

/**
 * Met à jour la structure HTML en fonction d'un nouvel interval
 * @param {{days: number, hours: number, minutes: number, seconds: number}} diff
 */
function updateDom (diff) {
  Object.keys(diff).forEach((key) => {
    if (previousDiff[key] !== diff[key]) {
      elements[key].innerHTML = diff[key]
    }
  })
  previousDiff = diff
}

refreshCountDown()

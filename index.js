window.addEventListener('load', function () {
  const list = document.querySelector('#list')

  if (phrases && phrases.length > 0) {
    getList(phrases).forEach((item) => {
      list.appendChild(item)
    })
  }

  document.querySelector('#search-form input').placeholder = 'Search on ' + phrases.length + ' phrases'

  document.querySelector('#search-form').addEventListener('submit', function (e) {
    e.preventDefault()
    const search = e.target.search.value.trim()
    list.textContent = ''
    
    const filtered = phrases.filter((phrase) => {
      return phrase.toLowerCase().includes(search.toLowerCase())
    })

    getList(filtered).forEach((item) => {
      list.appendChild(item)
    })
  })
})

function getList(list) {
  return list.map((phrase, index) => {
    const li = document.createElement('li')

    const phrArr = phrase.split('|')

    const eng = phrArr[0]
    const spn = phrArr.length > 1 ? phrArr[1] : ''
    const slug = slugy(eng, index)
    const btn = getBtnAudio(eng)

    const textEl = document.createElement('a')
    textEl.textContent = eng
    textEl.href = '#' + slug

    li.id = slug
    li.appendChild(textEl)
    li.appendChild(btn)

    if (spn) {
      const sml = document.createElement('small')
      const i = document.createElement('i')
      i.textContent = spn
      sml.appendChild(i)
      li.appendChild(sml)
    }
    return li
  })
}

function getBtnAudio(text) {
  const btn = document.createElement('button')
  btn.textContent = '🔊'
  btn.className = 'btn-audio'

  btn.addEventListener('click', function () {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'en'
    speechSynthesis.speak(utterance)
  })

  return btn
}

function slugy(text, index) {
  return text.trim()
    .substr(0, 20)
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    + '-' + (index + 1)
}

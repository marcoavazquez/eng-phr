window.addEventListener('load', function () {
  const list = document.querySelector('#list')

  if (phrases && phrases.length > 0) {
    getList(phrases).forEach((item) => {
      list.appendChild(item)
    })
  }

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
  return list.map((phrase) => {
    const li = document.createElement('li')

    const phrArr = phrase.split('|')

    const eng = phrArr[0]
    const spn = phrArr.length > 1 ? phrArr[1] : ''
    const slug = slugy(eng)

    const a = document.createElement('a')
    a.textContent = eng
    a.href = '#' + slug

    li.id = slug
    li.appendChild(a)

    if (spn) {
      const sml = document.createElement('small')
      sml.textContent = spn
      li.appendChild(sml)
    }
    return li
  })
}

function slugy(text) {
  return text.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    // .replaceAll("'", '')
}
async function fetchData() {
  try {
    const data = await fetch('./data.json')
    return data.json()
  } catch (error) {
    console.error('Error fetching data:', error)
    return { data: [error.toString()] }
  }
}

window.addEventListener('load',async function () {
  const phraseContainer = document.querySelector('#phrase')
  const translationContainer = document.querySelector('#translation')
  const speakBtn = document.querySelector('#btn-speak')
  const firstBtn = document.querySelector('#btn-first')
  const prevBtn = document.querySelector('#btn-prev')
  const nextBtn = document.querySelector('#btn-next')
  const lastBtn = document.querySelector('#btn-last')
  const counter = document.querySelector('#counter')
  const form = document.querySelector('form')
  const searchInput = document.querySelector('form input[type=search]')
  const prevPhrases = document.querySelector('#prev-phrase')
  const prevTranslation = document.querySelector('#prev-translation')
  const nextPhrases = document.querySelector('#next-phrase')
  const nextTranslation = document.querySelector('#next-translation')

  const searchParams = new URLSearchParams(this.location.search)
  const searchParam = searchParams.get('search')
  const indexParam = searchParams.get('index')

  const phrases = await fetchData()

  let search = searchParam || ''
  let list = !!search ? filtered : phrases.data
  let currentIndex = indexParam && parseInt(indexParam) < list.length ? parseInt(indexParam) : 0
  let currentEnglish = ''
  let filtered = []

  searchInput.value = search

  function setPhrase() {
    if (!list.length) {
      list = ['Not found|No se encontró na']
    }
    searchParams.set('index', currentIndex)
    window.history.replaceState(null, null, '?' + searchParams.toString())
    const [english, spanish] = list[currentIndex].split('|')
    phraseContainer.textContent = currentEnglish = english.trim()
    translationContainer.textContent = spanish || '🕸️' 

    const [prevEnglish, prevSpanish] = list[currentIndex - 1] ? list[currentIndex - 1].split('|') : ['','']
    prevPhrases.textContent = prevEnglish
    prevTranslation.textContent = prevSpanish || '🕸️'
    const [nextEnglish, nextSpanish] = list[currentIndex + 1] ? list[currentIndex + 1].split('|') : ['','']
    nextPhrases.textContent = nextEnglish
    nextTranslation.textContent = nextSpanish || '🕸️'
    setCounter()
  }

  function setCounter () {
    counter.textContent = `${currentIndex + 1}/${list.length}`
  }

  speakBtn.addEventListener('click', function () {
    const utterance = new SpeechSynthesisUtterance(currentEnglish)
    utterance.lang = 'en-US'
    speechSynthesis.speak(utterance)
  })

  firstBtn.addEventListener('click', function () {
    currentIndex = 0
    setPhrase()
  })
  prevBtn.addEventListener('click', function () {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : 0
    setPhrase()
  })
  nextBtn.addEventListener('click', function () {
    currentIndex = currentIndex < list.length - 1 ? currentIndex + 1 : currentIndex
    setPhrase()
  })
  lastBtn.addEventListener('click', function () {
    currentIndex = list.length - 1
    setPhrase()
  })
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    search = e.target.search.value.trim()
    searchParams.set('search', search)
    window.history.replaceState(null, null, '?' + searchParams.toString())
    if (search) {
      filtered = phrases.filter((phrase) => {
        return phrase.toLowerCase().includes(search.toLowerCase())
      })
    } else {
      filtered = []
    }
    list = !!search ? filtered : phrases
    setCounter()
    currentIndex = 0
    setPhrase()
  })

  setPhrase()
  setCounter()
})

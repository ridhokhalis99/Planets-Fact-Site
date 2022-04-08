import planetsInfographic from './data.json' assert { type: 'json' }

const planetsLinks = document.querySelectorAll('.nav-link')
const planetDetailLinks = document.querySelectorAll('.planet-nav-item')

const planetName = document.querySelector('#planetName')
const planetDescription = document.querySelector('#planetDescription')
const planetRotation = document.querySelector('#planetRotation')
const planetRevolution = document.querySelector('#planetRevolution')
const planetRadius = document.querySelector('#planetRadius')
const planetTemperature = document.querySelector('#planetTemperature')
const planetSource = document.querySelector('#planetSource')
const planetImage = document.querySelector('#planetImage')
const planetSurface = document.querySelector('#planetSurface')

let planet = { ...planetsInfographic[2] }

planetsLinks.forEach(planetLink => {
  planetLink.addEventListener('click', () => {
    let planetArray = planetsInfographic.filter(planetsInfographic => {
      return planetsInfographic.name == planetLink.innerHTML
    })
    planet = Object.assign(...planetArray)
    planetName.innerHTML = planet.name
    planetRotation.innerHTML = planet.rotation
    planetRevolution.innerHTML = planet.revolution
    planetRadius.innerHTML = planet.radius
    planetTemperature.innerHTML = planet.temperature

    planetDescription.innerHTML = planet.overview.content
    planetSource.setAttribute('href', planet.overview.source)
    planetImage.setAttribute('src', planet.images.planet)

    if (!planetSurface.classList.contains('hidden')) {
      planetSurface.classList.add('hidden')
    }
  })
})

planetDetailLinks.forEach(button => {
  button.addEventListener('click', () => {
    let category = button.getAttribute('id')
    switch (category) {
      case 'overview':
        planetDescription.innerHTML = planet.overview.content
        planetSource.setAttribute('href', planet.overview.source)
        planetImage.setAttribute('src', planet.images.planet)
        planetSurface.classList.add('hidden')
        break
      case 'structure':
        planetDescription.innerHTML = planet.structure.content
        planetSource.setAttribute('href', planet.structure.source)
        planetImage.setAttribute('src', planet.images.internal)
        planetSurface.classList.add('hidden')
        break
      case 'geology':
        planetDescription.innerHTML = planet.geology.content
        planetSource.setAttribute('href', planet.geology.source)
        planetImage.setAttribute('src', planet.images.planet)
        planetSurface.setAttribute('src', planet.images.geology)
        planetSurface.classList.remove('hidden')
        break
    }
  })
})

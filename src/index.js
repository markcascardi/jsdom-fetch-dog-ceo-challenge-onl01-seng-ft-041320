const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let breeds

function fetchDogPics() {
  return fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(function(response) {
    return response.json();
  }).then(function(json){
    renderPics(json.message);
  })
}

function renderPics(dogs) {
  const container = document.getElementById('dog-image-container')
  dogs.forEach(function picture(dog) {
    const dogImg = document.createElement('img')
    dogImg.src = dog
    dogImg.height = '100'
    dogImg.width = '100'
    container.appendChild(dogImg)
  })
}

function fetchDogBreeds() {
  return fetch(breedUrl)
  .then(function(response) {
    return response.json();
  }).then(function(json){
    breeds = Object.keys(json.message)
    renderDogBreeds(breeds)
  })
}


function renderDogBreeds(breeds) {
  const ul = document.getElementById('dog-breeds')
  ul.innerHTML = ''
  breeds.forEach(function(breed){
    const dogBreed = document.createElement('li')
    dogBreed.innerHTML = breed
    dogBreed.setAttribute('id', dogBreed.innerHTML)
    ul.appendChild(dogBreed)
    dogBreed.addEventListener('click', function(){
      dogBreed.style.color = "DeepSkyBlue"
    })
  })
}

document.addEventListener('change', function FilterBreeds(e) {
  let selection = e.target.value
  let filteredBreeds = breeds.filter(function(breed){
    return breed[0] == selection
  })
  renderDogBreeds(filteredBreeds)
})

document.addEventListener('DOMContentLoaded', function() {
  fetchDogPics();
  fetchDogBreeds();
})


console.log('%c HI', 'color: firebrick')

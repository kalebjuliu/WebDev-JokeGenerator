document.getElementById('button').addEventListener('click', getJokes)

function getJokes(e){

  const xhr = new XMLHttpRequest()

  xhr.open('GET', 'https://api.icndb.com/jokes/random', true)


  xhr.onload = function(){
    const response = JSON.parse(this.responseText)
    const joke = response.value.joke

    document.getElementById('joke').innerHTML = joke
  }

  xhr.send()

  e.preventDefault()
}

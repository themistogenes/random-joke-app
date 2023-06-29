const jokeContainer = document.getElementById('joke-container');
const btn = document.getElementById('btn');
const url = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

function getJoke() {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      jokeContainer.textContent = `${data.joke}`;
    })
}

btn.addEventListener('click', getJoke);
getJoke();
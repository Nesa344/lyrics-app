const output = document.getElementById('output');
const form = document.getElementById('form');

form.addEventListener('submit', getLyrics);

function getLyrics(e) {
  const artistInput = document.getElementById('artist').value;
  const songInput = document.getElementById('song').value;

  if (artistInput.length != 0 && songInput.length != 0) {
    fetch(`https://api.lyrics.ovh/v1/${artistInput}/${songInput}`)
      .then(response => response.json())
      .then(json => {
        output.innerHTML = json.lyrics;
      })
      .catch(error => output.innerHTML = 'Something Went Wrong');
  } else {
    output.innerHTML = 'Please Fill In Both Input Boxes';
  }
  output.style.display = 'block';
  e.preventDefault();
}
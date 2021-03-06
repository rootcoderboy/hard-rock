const searchSongs = () =>{
    const searchText = document.getElementById('search-field').value;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`;
    //Load data
    fetch(url)
    .then(res => res.json())
    .then(data => displaySongs(data.data))
}

const displaySongs = songs =>{
    songs.forEach(song => {
        const searchContainer = document.getElementById('search-container');
        const songDiv = document.createElement('div');
        songDiv.className = "single-result row align-items-center my-3 p-3";
        songDiv.innerHTML = `
        <div class="col-md-9">
            <h3 class="lyrics-name">${song.title}</h3>
            <p class="author lead">Album by <span>${song.artist.name}</span></p>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button class="btn btn-success">Get Lyrics</button>
        </div>
        `;
        searchContainer.appendChild(songDiv);
    });
}








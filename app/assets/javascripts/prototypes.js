////////////// CONSTRUCTORS //////////////

function Artist(artist){
  this.id = artist.id,
  this.name = artist.name,
  this.website = artist.website,
  this.discovered = artist.discovered,
  this.rating = artist.rating,
  this.notes = artist.notes
}

function Artwork(artwork){
  this.id = artwork.id,
  this.title = artwork.title,
  this.exhibition = artwork.exhibition,
  this.user_owned = artwork.user_owned,
  this.comments = artwork.comments,
  this.rating = artwork.rating
}

function Medium(medium){
  this.id = medium.id,
  this.name = medium.name
}

/////// ALL ARTISTS ///////
Artist.prototype.formatArtistIndexData = function(numofArtworks) {
  let artistHtml = `
    <tr>
      <td><a href="/artists/${this.id}" data-id="${this.id}" class="artist_show_link">${this.name}</a></td>
      <td><a href="/artists/${this.id}/artworks" data-id="${this.id}" class="artist_show_link">test</a></td>
      <td><a target=_blank href="${this.website}">${this.website}</a></td>
      <td>${this.rating}</td>
      <td><a href="/artists/${this.id}/edit" data-id="${this.id}" class="update_artist">Edit</a></td>
      <td><a href="/artists/${this.id}" data-method="delete">Delete</a></td>
    </tr>
  `
  return artistHtml
}

/////// FAVORITE ARTISTS ///////
Artist.prototype.formatFavArtistIndexData = function() {
  let favArtists = `
    <tr>
      <td><a href="/artists/${this.id}" data-id="${this.id}" class="artist_show_link">${this.name}</a></td>
      <td><a href="/artists/${this.id}/artworks" data-id="${this.id}" class="artist_show_link">test</a></td>
      <td><a target=_blank href="${this.website}">${this.website}</a></td>
      <td>${this.rating}</td>
      <td><a href="/artists/${this.id}/edit" data-id="${this.id}" class="update_artist">Edit</a></td>
      <td><a href="/artists/${this.id}" data-method="delete">Delete</a></td>
    </tr>
  `
  return favArtists
}

Artwork.prototype.formatArtworkOwnedData = function(theOwnedArtworkArtist) {
  // let theOwnedArtworkArtist = `${this.first_name} ${this.last_name}`;
  let artworkOwned = `
    <tr>
      <td><a href="/artists/${theOwnedArtworkArtist}/artworks/${this.id}">images</a></td>
      <td><a href="/artists/${theOwnedArtworkArtist}/artworks/${this.id}">${this.title}</a></td>
      <td><a href="/artists/${theOwnedArtworkArtist}/artworks/${this.id}">${this.exhibition}</a></td>
      <td><a href="/artists/${theOwnedArtworkArtist}">${theOwnedArtworkArtist}</a></td>
      <td><a href="/artists/${theOwnedArtworkArtist}/artworks/${this.id}" class="update_artwork">Edit</a></td>
      <td><a href="/artists/${theOwnedArtworkArtist}/artworks/${this.id}" data-method="delete">Delete</a></td>
    </tr>
  `
  return artworkOwned
}
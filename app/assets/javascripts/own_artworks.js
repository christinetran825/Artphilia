$(document).ready(function() {
  artworksOwned();
  buildEditArtwork();
})

/////// click on nav bar link for owned Artwork ///////
const artworksOwned = () => {
  $(document).on('click', '#owned_artworks', function(e){
    e.preventDefault();
    $.get(this.href).success(function(response){
      let _template = response
      let template = $.parseHTML(_template)
      let theHeader = $(template).find(".header")
      let theTableHeader= $(template).find(".table thead tr")
      theIndexBody(theHeader, theTableHeader)
      addArtworksOwnedByYes()
    });
  });
}

/////// DEFINE ARTWORK Filter for owned artwork ///////
function filterOwnership(collection, cb){
  const artworksHave = [];
  for (const element of collection){
    if (cb(element)){
      artworksHave.push(element);
    }
  }
  return artworksHave;
}

/////// ADD OWNED ARTWORKS using filter function ///////
function addArtworksOwnedByYes() {
  fetch(`/artists.json`)
  .then(res => res.json())
  .then(theArtists => {
    theArtists.forEach(artist => {
     let theArtistName = artist.name
     let theArtworks = artist.artworks
     const whichArtworkOwned = filterOwnership(theArtworks, function(artworks){
       return artworks.user_owned === "Yes"
     });
     whichArtworkOwned.forEach(artwork => {
       let theOwnedArtwork = new Artwork(artwork); //create newArtwork
       let theOwnedArtworkArtist = artwork.artist_id
       let eachOwnedArtwork = theOwnedArtwork.formatArtworkOwnedData(theArtistName, theOwnedArtworkArtist);
       tableContent(eachOwnedArtwork)
     });
    })
  })
}

const buildEditArtwork = () => {
  $(document).on('click', "#update_artwork", function(e){
    e.preventDefault();
    let artistId = $(this).attr("data-id");
    $.get(this.href).success(function(response){
      let _template = response
      let template = $.parseHTML(_template)
      let heading = `<h4>Edit the Artwork</h4>`
      let cancelButton = artworkFormCancelButton(artistId)
      let theForm = $(template).find(".edit_artwork")
      buildArtworkNewEditBody(heading, cancelButton, theForm)
    })
  });
}

function artworkFormCancelButton(artistId){
  let cancelButton =
    `<button><a href="/artworks/ownerships">Cancel</a></button>`
  return cancelButton
}

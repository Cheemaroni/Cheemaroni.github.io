import Webamp from 'webamp';
if(!Webamp.browserIsSupported()) {
    alert("Oh no! Webamp does not work!")
    throw new Error("What's the point of anything?")
}
const webamp = new Webamp({
    // Optional.
    initialTracks: [{
      metaData: {
        artist: "Bladee",
        title: "Hero of My Story",
      },
      url: "path/to/mp3/llama-2.91.mp3"
  }],
  initialSkin: {
    url: "Cheemaroni.github.io/Silent_Hill_Pyramid_Head_Amp.wsz"
},
});
webamp.renderWhenReady(document.getElementById('winamp-container'));
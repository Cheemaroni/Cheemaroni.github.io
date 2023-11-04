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
      url: "Cheemaroni.github.io/Hero of My Story 3style3 - Bladee.mp3"
  }],
  initialSkin: {
    url: "Cheemaroni.github.io/Silent_Hill_Pyramid_Head_Amp.wsz"
},
});
webamp.renderWhenReady(document.getElementById('winamp-container'));



const track = {
  url: 'Cheemaroni.github.io/Hero of My Story 3style3 - Bladee.mp3',
  blob: dataBlob,
  defaultName: 'My Song',
  metaData: {
      artist: 'Jordan Eldredge',
      title: "Jordan's Song"
  },
  duration: 95
};
if(Winamp.browserIsSupported()) {
  new Winamp({/* ... */});
} else {
}
const options = {
  initialSkin: {
      url: './path/to/skin.wsz'
  },
  initialTracks: [/* ... */],
  availableSkins: [
    { url: "./green.wsz", name: "Green Dimension V2" },
    { url: "./osx.wsz", name: "Mac OSX v1.5 (Aqua)" }
  ],
  enableDoubleSizeMode: true,
  enableHotkeys: true,
  zIndex: 99999,
  filePickers: [{
      contextMenuName: "My File Picker...",
      filePicker: () => Promise.resolve([{
          url: './rick_roll.mp3'
      }]),
      requiresNetwork: true
  }],
  handleTrackDropEvent: async (e) => {
  },
  handleAddUrlEvent: async () => {
  },
  handleLoadListEvent: async () => {
  },
  handleSaveListEvent: (tracks) => {}
};
webamp.appendTracks([
  {url: 'Cheemaroni.github.io/Hero of My Story 3style3 - Bladee.mp3'},
  {url: 'https://example.com/track2.mp3'},
  {url: 'https://example.com/track3.mp3'}
]);
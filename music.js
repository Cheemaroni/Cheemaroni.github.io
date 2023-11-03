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
  // Either `url` or `blob` must be specified
  // Note: This URL must be served the with correct CORs headers.
  url: 'Cheemaroni.github.io/Hero of My Story 3style3 - Bladee.mp3',
  blob: dataBlob,

  // Optional. Name to be used until ID3 tags can be resolved.
  // If the track has a `url`, and this property is not given,
  // the filename will be used instead.
  defaultName: 'My Song',

  // Optional. Data to be used _instead_ of trying to fetch ID3 tags.
  metaData: {
      artist: 'Jordan Eldredge',
      title: "Jordan's Song"
  },

  // Optional. Duration (in seconds) to be used instead of
  // fetching enough of the file to measure its length.
  duration: 95
};
if(Winamp.browserIsSupported()) {
  new Winamp({/* ... */});
  // ...
} else {
  // Perhaps you could show some simpler player in this case.
}
const options = {
  // Optional. An object representing the initial skin to use.
  // If omitted, the default skin, included in the bundle, will be used.
  // Note: This URL must be served the with correct CORs headers.
  initialSkin: {
      url: './path/to/skin.wsz'
  },

  // Optional. An array of `track`s (see above) to prepopulate the playlist with.
  initialTracks: [/* ... */],

  // Optional. An array of objects representing skins.
  // These will appear in the "Options" menu under "Skins".
  // Note: These URLs must be served with the correct CORs headers.
  availableSkins: [
    { url: "./green.wsz", name: "Green Dimension V2" },
    { url: "./osx.wsz", name: "Mac OSX v1.5 (Aqua)" }
  ],

  // Optional. (Default: `false`) Should double size mode be enabled?
  enableDoubleSizeMode: true,

  // Optional. (Default: `false`) Should global hotkeys be enabled?
  enableHotkeys: true,

  // Optional. (Default: `0`) The zIndex that Webamp should use.
  zIndex: 99999,

  // Optional. An array of additional file pickers.
  // These will appear in the "Options" menu under "Play".
  // In the demo site, This option is used to provide a "Dropbox" file
  // picker.
  filePickers: [{
      // The name that will appear in the context menu.
      contextMenuName: "My File Picker...",
      // A function which returns a Promise that resolves to
      // an array of `track`s (see above)
      filePicker: () => Promise.resolve([{
          url: './rick_roll.mp3'
      }]),
      // A boolean indicating if this options should be made
      // available when the user is offline.
      requiresNetwork: true
  }],

  // Optional. Provide a custom way to derive `Track` objects from a drop event.
  // Useful if your website has some DOM representation of a track that you can map to a URL/blob.
  handleTrackDropEvent: async (e) => {
      // Return an array of `Track` objects, see documentation below, or `null` to get the default drop behavior.
      // You may optionally wrap the return value in a promise.
  },

  // Optional. Provide a way to extend the behavior of the button ADD URL.
  // **Since** 1.4.1
  handleAddUrlEvent: async () => {
      // Return an optional array of `Track` objects or null.
  },

  // Optional. Provide a way to extend the behavior of the playlist button LOAD LIST.
  // **Since** 1.4.1
  handleLoadListEvent: async () => {
      // Return an optional array of `Track` objects or null.
  },

  // Optional. Provide a way to extend the behavior of the playlist button SAVE LIST.
  // Where tracks: Track[]
  // **Since** 1.4.1
  handleSaveListEvent: (tracks) => {}
};

// NOTE: Your audio files must be served from the same domain as your HTML
// file, or served with permissive CORS HTTP headers:
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
webamp.appendTracks([
  {url: 'Cheemaroni.github.io/Hero of My Story 3style3 - Bladee.mp3'},
  {url: 'https://example.com/track2.mp3'},
  {url: 'https://example.com/track3.mp3'}
]);
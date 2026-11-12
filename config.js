/* VIDAA Frame — your settings. Edit, re-upload to GitHub, the TV picks it up next open.
   Plain ES5 (old TV browser): no arrow functions, no let/const, no trailing commas. */
window.VF_CONFIG = {
  version: '5.1.0',
  author: 'Steven (based on Imaam Jesly)',

  clock: { use24h: false, showDate: true },

  weather: { on: true, lat: 7.1193, lon: -73.1227, place: 'Bucaramanga' },

  /* Spotify Premium — real account playback via the launcher (press ▶II on the remote).
     defaultUri plays if nothing is already going; otherwise it resumes your last session. */
  spotify: { on: false, clientId: '015e913e5eda4eeab121a2fd20ed4332', defaultUri: 'spotify:playlist:37i9dQZF1DX5trt9i14X7j' },

  wallpaper: {
    mode: 'live', videoFile: 'live.mp4', minutesPerPhoto: 5,
    photos: ['conejito', 'night', 'golden', 'misty', 'peaks']
  },

  /* Dock. To use only your own wallpaper, leave just 'conejito' in photos. */
  apps: [
    { id: 'youtube', label: 'YouTube',  type: 'match',  match: 'youtube',  fallback: 'https://www.youtube.com/tv', logo: 'ic-youtube.svg', tint: '#ff0033' },
    { id: 'netflix', label: 'Netflix',  type: 'match',  match: 'netflix',  fallback: 'https://www.netflix.com', glyph: 'grid', tint: '#e50914' },
    { id: 'spotify', label: 'Spotify',  type: 'match',  match: 'spotify',  fallback: 'https://open.spotify.com',   logo: 'ic-spotify.svg', tint: '#1db954' },
    { id: 'browser', label: 'Browser',  type: 'web',    url: 'https://www.google.com', glyph: 'safari', tint: '#1d7dfd' },
    { id: 'more',    label: 'Apps',     type: 'folder', glyph: 'grid', tint: '#2f3038' },
    { id: 'info',    label: 'Info',     type: 'info',   glyph: 'info', tint: '#2f3038' }
  ]
};

/*
Simple Chrome Extension to prelisten to artists and bands playing at this years Pukkelpop 2015 - www.pukkelpop.be
Surf to the line-up page at Pukkelpop.be and click an artist name.
Checks YouTube, Spotify, Google Music
*/

var artistspan = document.getElementsByClassName('schedule__act__name');
var artistaction = document.getElementsByClassName('schedule__action');

var fa = document.createElement("link");
fa.href = "https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css";
fa.rel = "stylesheet";
document.body.appendChild(fa);

var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".listen-link {display:none;} .popup--visible .listen-link { z-index:9999; padding: 5px 0px 5px 18px; font-size:18px; color: #FFA600 !important; } .popup--visible .listen-link:hover { color: #ffc900 !important } .popup--visible .listen-link:first-child{ margin-top: 7px !important; } .listen-link span { display: none; } .popup--visible .listen-link { display: inline-block; .popup .schedule__act .schedule__act__name { margin-top: -10px !important; } a.listen-link.youtube { color: #bb0000 }";
document.body.appendChild(css);


for (var i = artistspan.length - 1; i >= 0; --i) {

  var artist = artistspan[i].children[1].text;
  var encodedquery = encodeURIComponent(artist);

  var ytquery = 'https://www.youtube.com/results?search_query=' + encodedquery;
  var spquery = 'https://play.spotify.com/search/' + encodedquery;
  var gmquery = 'https://play.google.com/music/listen#/sr/' +  encodedquery;

  var pkp_ytlink = document.createElement('a');
  pkp_ytlink.className = "listen-link youtube";
  pkp_ytlink.href = ytquery;
  pkp_ytlink.title = "Listen on Youtube";
  pkp_ytlink.innerHTML = '<i class="fa fa-youtube-play"></i><span>YouTube</span>';
  artistspan[i].children[1].appendChild( pkp_ytlink );

  var pkp_splink = document.createElement('a');
  pkp_splink.className = "listen-link spotify";
  pkp_splink.href = spquery;
  pkp_splink.title = "Listen on Spotify";
  pkp_splink.innerHTML = '<i class="fa fa-spotify"></i><span>Spotify</span>';
  artistspan[i].children[1].appendChild( pkp_splink );

  var pkp_gmlink = document.createElement('a');
  pkp_gmlink.className = "listen-link googlemusic";
  pkp_gmlink.href = spquery;
  pkp_gmlink.title = "Listen on Google Music";
  pkp_gmlink.innerHTML = '<i class="fa fa-music"></i><span>Google Music</span>';
  artistspan[i].children[1].appendChild( pkp_gmlink );

}

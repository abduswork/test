var player = videojs('content_video');

var options = {
  id: 'content_video',
  adTagUrl: 'http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&' +
      'iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&' +
      'impl=s&gdfp_req=1&env=vp&output=xml_vmap1&unviewed_position_start=1&' +
      'cust_params=sample_ar%3Dpremidpostpod%26deployment%3Dgmf-js&cmsid=496&' +
      'vid=short_onecue&correlator='
};

player.ima(options);

// player.ads(); // initialize videojs-contrib-ads

// // request ads whenever there's new video content
// player.on('contentchanged', function() {
//   // in a real plugin, you might fetch your ad inventory here
//   player.trigger('adsready');
// });

// player.on('readyforpreroll', function() {
//   player.ads.startLinearAdMode();
//   // play your linear ad content
//   // in this example, we use a static mp4
//   player.src('https://www.adspeed.com/mp4/big_buck_bunny.mp4');

//   // send event when ad is playing to remove loading spinner
//   player.one('adplaying', function() {
//     player.trigger('ads-ad-started');
//   });

//   // resume content when all your linear ads have finished
//   player.one('adended', function() {
//     player.ads.endLinearAdMode();
//   });
// });

// player.trigger('adsready');

// player.ads({
//   prerollTimeout: 5000
// });






// Remove controls from the player on iPad to stop native controls from stealing
// our click
// var contentPlayer =  document.getElementById('content_video_html5_api');
// if ((navigator.userAgent.match(/iPad/i) ||
//       navigator.userAgent.match(/Android/i)) &&
//     contentPlayer.hasAttribute('controls')) {
//   contentPlayer.removeAttribute('controls');
// }

// Initialize the ad container when the video player is clicked, but only the
// first time it's clicked.
// var initAdDisplayContainer = function() {
//   player.ima.initializeAdDisplayContainer();
//   wrapperDiv.removeEventListener(startEvent, initAdDisplayContainer);
// }

// var startEvent = 'click';
// if (navigator.userAgent.match(/iPhone/i) ||
//     navigator.userAgent.match(/iPad/i) ||
//     navigator.userAgent.match(/Android/i)) {
//   startEvent = 'touchend';
// }

// var wrapperDiv = document.getElementById('content_video');
// wrapperDiv.addEventListener(startEvent, initAdDisplayContainer);
// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.

// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('X-Parse-Application-Id', 'e34dc2ab4e4689f558a14a13c40e092739f1dee1');
  jqXHR.setRequestHeader('X-Parse-REST-API-Key', '19379bb8013baf280b591d491bb0100e8a769ee9');
});

// Put your campus prefix here
window.CAMPUS = 'HC';

function SoundStripe(photoUrl, songUrl) {
  this.photoUrl = photoUrl;
  this.songUrl = songUrl;
}

function SoundStripeView(selector, model) {
  this.$el = $(selector);
  this.model = model;

  this.soundStripeTemplate = _.template($("#sound-stripe-template").text());
}

SoundStripeView.prototype.render = function() {
  var html = this.soundStripeTemplate(this.model);
  this.$el.html(html);
}

function App() {
  photoUrl = getQueryParam("photoUrl");
  songUrl = getQueryParam("songUrl");

  this.model = new SoundStripe(photoUrl, songUrl);

  this.view = new SoundStripeView("#sound-stripe", this.model);
  this.view.render();
}

function getQueryParam(paramName) {
  var regex = new RegExp(paramName + "=([^&]*)")
  var results = regex.exec(window.location.href);
  return results[1]
}


$(document).ready(function() {
  new App();
});

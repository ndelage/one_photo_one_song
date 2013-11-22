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
  var photoUrlResults = /photoUrl=(.*)&/.exec(window.location.href);
  var photoUrl;
  if(photoUrlResults && photoUrlResults.length > 1) {
    photoUrl = photoUrlResults[1];
  }

  var songUrl;
  var songUrlResults = /songUrl=(.*)(&|$)/.exec(window.location.href);
  if(songUrlResults && songUrlResults.length > 1 ) {
    songUrl = songUrlResults[1];
  }

  this.model = new SoundStripe(photoUrl, songUrl);

  this.view = new SoundStripeView("#sound-stripe", this.model);
  this.view.render();
}


$(document).ready(function() {
  new App();
});

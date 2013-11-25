function SoundStripe(photoUrl, songUrl) {
  this.photoUrl = photoUrl;
  this.songUrl = songUrl;
}

function SoundStripeView(el, model) {
  this.$el = el;
  this.model = model;

  this.soundStripeTemplate = _.template(Templates.soundStripe);
}

SoundStripeView.prototype.render = function() {
  var html = this.soundStripeTemplate(this.model);
  this.$el.html(html);
}

var QueryParser = {
  parseParams: function(url) {
    if(url.indexOf("?") == -1) {
      return {};
    } else {
      var queryString = url.substring(url.indexOf("?")+1, url.length);

      return _.reduce(queryString.split("&"), function(params, pair) {
        pair = pair.split("=");
        params[pair[0]] = pair[1];
        return params;
      }, {});
    }
  }
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

  this.view = new SoundStripeView($("#sound-stripe"), this.model);
  this.view.render();
}


$(document).ready(function() {
  new App();
});

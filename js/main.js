var SoundStripe = Backbone.Model.extend({
  validate: function(attrs, options) {
    if(!(attrs.photoUrl && attrs.songUrl)) {
      return "Must include both photoUrl and songUrl";
    }
  }
});

var LinkView = Backbone.View.extend({
  template: _.template("http://localhost:8000?photoUrl=<%=photoUrl%>&songUrl=<%=songUrl%>"),
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },
  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }
});

var SoundStripeView = Backbone.View.extend({
  template: _.template(Templates.soundStripe),
  render: function() {
    var html = this.template(this.model.attributes);
    this.$el.html(html);
  }
});

var SoundStripeFormView = Backbone.View.extend({
  template: _.template(Templates.soundStripeForm),
  events: { "submit form": "updateModel"},
  render: function() {
    var html = this.template(this.model);
    this.$el.html(html);
  },
  updateModel: function(e) {
    e.preventDefault();
    this.model.set({photoUrl: this.$el.find("#photoUrl").val(),
                    songUrl: this.$el.find("#songUrl").val()});
  }
});


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
  var params = QueryParser.parseParams(window.location.href);
  this.model = new SoundStripe({photoUrl: params.photoUrl, songUrl: params.songUrl});

  if(this.model.isValid()) {
    this.view = new SoundStripeView({el: $("#sound-stripe"), model: this.model});
    this.view.render();
  } else {
    this.view = new SoundStripeFormView({el: $("#new-sound-stripe"), model: this.model});
    this.view.render();
    this.linkView = new LinkView({el: $("#link"), model: this.model});
  }

}


$(document).ready(function() {
  new App();
});

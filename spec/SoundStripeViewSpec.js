describe("SoundStripeView", function() {
  describe("render", function() {
    var model, view;

    beforeEach(function() {
      model = new SoundStripe({photoUrl: "photoUrl", songUrl: "songUrl"});
      view = new SoundStripeView({el: $("<div id='sound-stripe'></div>"), model: model});
    });

    it("sets the img src to model.photoUrl", function() {
      view.render();
      expect(view.$el.find("img").attr('src')).toEqual(model.get('photoUrl'));
    });

    it("sets the audio src to model.songUrl", function() {
      view.render();
      expect(view.$el.find("audio").attr('src')).toEqual(model.get('songUrl'));
    });
  });
});

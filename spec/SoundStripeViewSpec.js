describe("SoundStripeView", function() {
  describe("render", function() {
    var model, view;

    beforeEach(function() {
      model = new SoundStripe("photoUrl", "songUrl");
      view = new SoundStripeView($("<div id='sound-stripe'></div>"), model);
    });

    it("sets the img src to model.photoUrl", function() {
      view.render();
      expect(view.$el.find("img").attr('src')).toEqual(model.photoUrl);
    });

    it("sets the audio src to model.songUrl", function() {
      view.render();
      expect(view.$el.find("audio").attr('src')).toEqual(model.songUrl);
    });
  });
});

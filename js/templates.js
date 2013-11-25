var Templates = {
  soundStripe: '<img id="photo" src="<%=photoUrl%>">\
                <audio id="song" autoplay src="<%=songUrl%>"></audio>',
  soundStripeForm: '<form action="#">\
                      <input type="text" id="photoUrl" /><br /> \
                      <input type="text" id="songUrl" /><br /> \
                      <input type="submit" val="Generate URL" /> \
                    </form>'
}

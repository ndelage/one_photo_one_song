describe("QueryParser", function() {
  describe("parseParams", function() {
    it("returns and empty object if no params are specified", function() {
      var params = QueryParser.parseParams("http://localhost.com/");
      expect(params).toEqual({});
    });

    it("parses the query params into a hash", function() {
      var params = QueryParser.parseParams("http://localhost.com/?foo=bar&fizz=buzz");
      expect(params).toEqual({foo: "bar", fizz: "buzz"});
    });

    it("parses the query params into a hash even when '?' are present", function() {
      var params = QueryParser.parseParams("http://localhost.com/?foo=b?ar&fizz=buzz");
      expect(params).toEqual({foo: "b?ar", fizz: "buzz"});
    });
  });
});

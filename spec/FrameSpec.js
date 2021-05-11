describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("should return Open if sum of both rolls < 10", function() {
    frame.roll(3,5)
    expect(frame.outcome()).toEqual("description: open, total:7")
  });


});
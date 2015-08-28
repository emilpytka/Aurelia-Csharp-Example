/// <reference path="../../src/typings/jasmine.d.ts"/>

import {ToShorterValueConverter} from '../../src/converters/toShorterValueConverter'

describe("toShorterValueConverter test", () => {
  it("long text to 10 char", () => {
      var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
      var converter = new ToShorterValueConverter();
      var convertedText = converter.toView(text, 10);
      expect(convertedText).toEqual("Lorem ipsu");

  });

  it ("short text to 30 char", () => {
      var text = "Lorem ipsum";
      var converter = new ToShorterValueConverter();
      var convertedText = converter.toView(text, 30);
      expect(convertedText).toEqual("Lorem ipsum");
    });

    it ("null object should return null", () => {
      var converter = new ToShorterValueConverter();
      var convertedText = converter.toView(null, 30);
      expect(convertedText).toBeNull();
    });

});

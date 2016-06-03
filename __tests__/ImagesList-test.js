import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ImagesList from '../modules/ImagesList';
import ImagesData from '../data/ImagesData'

jest.unmock("../modules/ImagesList");
jest.unmock("../data/ImagesData");

describe('Images list', () => {
  var imagesListRendered;

  beforeEach(()=>{
    imagesListRendered = TestUtils.renderIntoDocument(
      <ImagesList />
    );
  });

  it('Rendered all items in list', () => {
    // find all items
    var imagesListItems = TestUtils.scryRenderedDOMComponentsWithClass(imagesListRendered, "imagesList__item");
    expect(imagesListItems.length).toBe(ImagesData.length);
  });
});

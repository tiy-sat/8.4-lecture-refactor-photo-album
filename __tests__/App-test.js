import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../modules/App';
import Modal from '../modules/Modal';
import ImagesList from '../modules/ImagesList';

jest.unmock("../modules/App");
jest.unmock("../modules/ImagesList");

describe('Photo album app component', () => {
  var appRendered;

  beforeEach(()=>{
    appRendered = TestUtils.renderIntoDocument(
      <App/>
    );
  })

  it('mocked the modal class', () => {
    // Expecting modal to have been mocked
    expect(Modal.mock.calls.length).toBe(1);
  });

  it('renders images list', ()=> {
    // find h1 on page
    var imagesList = TestUtils.findRenderedDOMComponentWithClass(appRendered, "imagesList");
    expect(imagesList).toBeDefined();
  });

  it('handles state change for modal open', ()=>{
    // call handle modal open function
    appRendered.handleModalOpen();
    expect(appRendered.state.modalOpen).toBe(true);
  });
});

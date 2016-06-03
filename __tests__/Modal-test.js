import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Modal from '../modules/Modal';

jest.unmock("../modules/Modal");

describe('Modal', ()=> {
  it('Is hidden', ()=> {
    var ModalRendered = TestUtils.renderIntoDocument(
      <Modal isModalOpen={false} />
    );
    // find all items
    var modal = TestUtils.scryRenderedDOMComponentsWithClass(ModalRendered, "modal--hide");
    expect(modal.length).toBe(1)
  });
  
  it('Is visible', ()=> {
    var ModalRendered = TestUtils.renderIntoDocument(
      <Modal isModalOpen={true} />
    );
    // find all items
    var modal = TestUtils.scryRenderedDOMComponentsWithClass(ModalRendered, "modal--hide");
    expect(modal.length).toBe(0)
  });
});

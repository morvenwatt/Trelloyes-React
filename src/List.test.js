import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('List component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<List />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(<List />)
        .toJSON();
      expect(tree).toMatchSnapshot();  
    })
});

/* So, then I could write a test that went something like this?
What is an instance of a different Smoke test?
 
it ('renders card with image', () => {
    const tree = renderer
    .create(<Card img='xyz' />) --- IMG HERE WOULD BE A PROP
    .toJSON();
    expect(tree).toMatchSnapshot();
})
*/
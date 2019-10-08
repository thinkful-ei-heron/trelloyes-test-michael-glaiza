import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import STORE from './STORE';

describe('App component test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the app as expected', () => {
    const tree = renderer.create(<App store={STORE}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

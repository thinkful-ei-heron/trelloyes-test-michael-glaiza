import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  const allCard = [
    { id: 'a', title: 'First card', content: 'lorem ipsum' },
   { id: 'b', title: 'Second card', content: 'lorem ipsum' },
   { id: 'c', title: 'Third card', content: 'lorem ipsum' }
 ]

  ReactDOM.render(<List cards={allCard}/>, div);

  ReactDOM.unmountComponentAtNode(div);
});

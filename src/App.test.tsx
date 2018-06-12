import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {create} from 'react-test-renderer';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const component = create(
    <App />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

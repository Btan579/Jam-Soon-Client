import React from 'react';
import App from './App';
import { shallow } from 'enzyme';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});

describe('<App />', () => {
  it('Renders without crashing', () => {
    shallow(<App />);
  });

  // it('Can starts a new game', () => {
  //   const wrapper = shallow(<Game />);
  //   // Mess up the state a bit to simulate an existing game
  //   wrapper.setState({
  //     guesses: [1, 2, 3, 4],
  //     feedback: 'Awesome',
  //     correctAnswer: -1 // Negative so different to new game
  //   });
  //   wrapper.instance().restartGame();
  //   expect(wrapper.state('guesses')).toEqual([]);
  //   expect(wrapper.state('feedback')).toEqual('Make your guess!');
  //   expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
  //   expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
  // });

});
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.jestExpect = global.expect;
global.expect = chai.expect;

expect({ a: 1 }).to.deep.equal({ a: 1 });
jestExpect({ a: 1 }).toEqual({ a: 1 });
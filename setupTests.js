// @flow

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Setup Enzyme
export default configure({ adapter: new Adapter() });

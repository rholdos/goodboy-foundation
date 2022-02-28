import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import Contribution from './form-steps/Contribution';
import Contributor from './form-steps/Contributor';
import Summary from './form-steps/Summary';

const Content = () => {
  return (
    <Router>
      <Redirect exact from='/' to='/contribution' />
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        atLeave={{ opacity: 0 }}
        className='router-switch'
      >
        <Route path='/contribution' component={Contribution} />
        <Route path='/contributor' component={Contributor} />
        <Route path='/summary' component={Summary} />
      </AnimatedSwitch>
    </Router>
  );
};

export default Content;

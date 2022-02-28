import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Contribution from './form-steps/Contribution';
import Contributor from './form-steps/Contributor';
import Summary from './form-steps/Summary';

const Content = () => {
  return (
    <Router>
      <Redirect exact from='/' to='/contribution' />
      <Route path='/contribution' component={Contribution} />
      <Route path='/contributor' component={Contributor} />
      <Route path='/summary' component={Summary} />
    </Router>
  );
};

export default Content;

// components
import Dashboard from 'components/dashboard';
import SideNav from 'components/sidenav';
// styling
import * as STYLE from 'styles';
import { GlobalStyles } from 'styles/global';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <STYLE.AppContainer>
        <SideNav />
        <Dashboard />
      </STYLE.AppContainer>
    </>
  );
};

export default App;

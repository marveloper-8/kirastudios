import { AiOutlineBell } from 'react-icons/ai';
import * as STYLE from 'styles/dashboard';

const Navigation = () => {
  return (
    <STYLE.Navigation>
        <div>
            <STYLE.NavigationTitle1>Hi!</STYLE.NavigationTitle1>&nbsp;
            You have 3 requests.&nbsp;
            <STYLE.NavigationTitle2>Check</STYLE.NavigationTitle2>
        </div>
        <STYLE.Subscription>
            <STYLE.Button>Subscription</STYLE.Button> <AiOutlineBell />
        </STYLE.Subscription>
    </STYLE.Navigation>
  );
};

export default Navigation;

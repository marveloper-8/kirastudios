import * as STYLE from 'styles/sidenav';
import { profileImg } from 'resources/data';

const NavigationAccount = () => {
  return (
    <STYLE.NavigationAccount>
        <STYLE.NavigationAccountImage img={profileImg}>
            <STYLE.NavigationAccountActive />
        </STYLE.NavigationAccountImage>
        <div>
            <div>Jane Watson</div>
            <STYLE.NavigationAccountEmail>Jane watson@mydesk.com</STYLE.NavigationAccountEmail>
        </div>
    </STYLE.NavigationAccount>
  );
};

export default NavigationAccount;

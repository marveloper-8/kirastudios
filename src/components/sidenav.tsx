import { useState } from 'react';
import * as STYLE from 'styles/sidenav';
import {AiFillHome, AiOutlineMenu} from 'react-icons/ai';
import { navigation } from 'resources/data';
import NavigationItem from 'sub-components/navigation/navigation-item';
import NavigationAccount from 'sub-components/navigation/navigation-account';

const SideNav = () => {
  const [active, setActive] = useState(navigation[0].label);
  const [open, setOpen] = useState(false);
  return (
    <>
    <STYLE.Wrapper>
      <STYLE.MobileMenu onClick={() => setOpen(true)}>
        <AiOutlineMenu />
      </STYLE.MobileMenu>
    </STYLE.Wrapper>
    <STYLE.Background active={open} onClick={() => setOpen(false)} />
    <STYLE.Container active={open}>
      <div>
        <STYLE.Logo>
            <AiFillHome />
        </STYLE.Logo>
        <STYLE.Navigation>
          {navigation.map((item: any, index: number) => {
            return (
              <NavigationItem
                key={index}
                active={active}
                setActive={setActive}
                item={item}
              />
            )
          })}
        </STYLE.Navigation>
      </div>
      <NavigationAccount />
    </STYLE.Container>
    </>
  );
};

export default SideNav;

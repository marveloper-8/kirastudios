import { FC } from 'react';
import { DashboardModel } from 'resources/interface';
import * as STYLE from 'styles/dashboard';

const NavigationItem: FC<DashboardModel> = ({item, active, setActive}) => {
  return (
    <STYLE.SectionsNavigationItem 
        active={active} 
        onClick={() => setActive(item)}
    >{item}</STYLE.SectionsNavigationItem>
  );
};

export default NavigationItem;

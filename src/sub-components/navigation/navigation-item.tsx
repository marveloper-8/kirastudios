import { FC } from 'react';
import * as STYLE from 'styles/sidenav';
import {AiOutlineDown} from 'react-icons/ai';
import Icons from 'widgets/icons';
import { NavigationModel } from 'resources/interface';

const NavigationItem: FC<NavigationModel> = ({active, item, setActive}) => {
    const activeItem = item.label === active
  return (
    <STYLE.NavigationItem 
        active={activeItem}
        onClick={() => setActive(item.label)}
    >
        <STYLE.NavigationItemIcon active={activeItem}>
            <Icons icon={item.label} />
        </STYLE.NavigationItemIcon>
        <div>{item.label}</div>
        <STYLE.NavigationItemRight>
            {item.count && (
            <STYLE.NavigationItemCount>
                {item.count}
            </STYLE.NavigationItemCount>
            )}
            {item.dropdown && <AiOutlineDown />}
        </STYLE.NavigationItemRight>
    </STYLE.NavigationItem>
  );
};

export default NavigationItem;

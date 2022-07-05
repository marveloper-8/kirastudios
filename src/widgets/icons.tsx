import { useState, FC, useEffect } from 'react';
import { AiOutlineBarChart, AiOutlineCreditCard, AiOutlineFileAdd, AiOutlineFolderAdd, AiOutlineFullscreen, AiOutlineHome, AiOutlineMessage, AiOutlineSliders, AiOutlineUser, AiOutlineUserAdd, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { NavigationModel } from 'resources/interface';

const Icons: FC<NavigationModel> = ({icon}) => {
    const [iconComponent, setIconComponent] = useState(<AiOutlineHome />)

    useEffect(() => {
        switch (icon) {
            case 'Home':
                setIconComponent(<AiOutlineHome />)
                break;
            case 'Visitors':
                setIconComponent(<AiOutlineUser />)
                break;
            case 'Analytics':
                setIconComponent(<AiOutlineBarChart />)
                break;
            case 'Customer Service':
                setIconComponent(<AiOutlineMessage />)
                break;
            case 'Reports':
                setIconComponent(<AiOutlineFolderAdd />)
                break;
            case 'Billing':
                setIconComponent(<AiOutlineCreditCard />)
                break;
            case 'Unique users':
                setIconComponent(<AiOutlineUserAdd />)
                break;
            case 'Registered members':
                setIconComponent(<AiOutlineUsergroupAdd />)
                break;
            case 'Resolved issues':
                setIconComponent(<AiOutlineFileAdd />)
                break;
            case 'Expenses this week':
                setIconComponent(<AiOutlineFolderAdd />)
                break;
            case 'Office rent':
                setIconComponent(<AiOutlineHome />)
                break;
            case 'Refund of order':
                setIconComponent(<AiOutlineFullscreen />)
                break;
            case 'Balance top-up':
                setIconComponent(<AiOutlineCreditCard />)
                break;
            case 'Settings':
                setIconComponent(<AiOutlineSliders />)
        }
    }, [icon])
    
    return iconComponent;
};

export default Icons;

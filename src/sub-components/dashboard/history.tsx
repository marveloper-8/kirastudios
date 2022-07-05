import { FC } from 'react';
import { DashboardModel } from 'resources/interface';
import * as STYLE from 'styles/dashboard';
import Icons from 'widgets/icons';

const History: FC<DashboardModel> = ({title, time, amount}) => {
  return (
    <STYLE.History>
        <STYLE.AnalyticsItemIcon alt>
            <Icons icon={title} />
        </STYLE.AnalyticsItemIcon>
        <div>
            <STYLE.Active><h4>{title}</h4></STYLE.Active><br />
            <div>{time}</div>
        </div>
        <div>
            <STYLE.OrdersHistoryTitle alt right>
                {amount} <STYLE.AnalyticsItemCurrency>USD</STYLE.AnalyticsItemCurrency>
            </STYLE.OrdersHistoryTitle>
        </div>
    </STYLE.History>
  );
};

export default History;

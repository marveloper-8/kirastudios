import { FC } from 'react';
import { DashboardModel } from 'resources/interface';
import * as STYLE from 'styles/dashboard';
import Icons from 'widgets/icons';

const AnalyticsItem: FC<DashboardModel> = ({label, value, currency, increase, percentage}) => {
  return (
    <STYLE.AnalyticsItem>
        <STYLE.AnalyticsItemIcon>
            <Icons icon={label} />
        </STYLE.AnalyticsItemIcon>
        <div>
            <div>{label}</div>
            <STYLE.AnalyticsItemTitle>
                <div>
                    {value}&nbsp;
                    {currency && <STYLE.AnalyticsItemCurrency>{currency}</STYLE.AnalyticsItemCurrency>}
                </div>
                <STYLE.AnalyticsItemPercentage increase={increase}>
                    {increase ? '+' : increase === undefined ? '' : '-'}{percentage}
                </STYLE.AnalyticsItemPercentage>
            </STYLE.AnalyticsItemTitle>
        </div>
    </STYLE.AnalyticsItem>
  );
};

export default AnalyticsItem;

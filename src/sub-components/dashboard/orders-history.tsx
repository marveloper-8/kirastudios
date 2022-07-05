import { FC } from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { DashboardModel } from 'resources/interface';
import * as STYLE from 'styles/dashboard';
import BalanceGraph from 'widgets/balance-graph';
import PaymentGraph from 'widgets/payment-graph';

const OrdersHistoryItem: FC<DashboardModel> = ({title, type, transaction, value, nextPayment, date}) => {
  return (
    <STYLE.OrdersHistory>
        <STYLE.OrdersHistoryTitle>
            <div>{title}</div>
            <STYLE.OrdersHistoryTitleIcon>
                <AiOutlineEllipsis />
            </STYLE.OrdersHistoryTitleIcon>
        </STYLE.OrdersHistoryTitle>
        <div>{transaction ? transaction : ' '}</div>
        {type === 'balance' ? (
            <STYLE.OrdersHistoryData>
                <STYLE.OrdersHistoryTitle alt>
                    {value} <STYLE.AnalyticsItemCurrency>USD</STYLE.AnalyticsItemCurrency>
                </STYLE.OrdersHistoryTitle>
                <BalanceGraph />
                <div><STYLE.Button alt>Add Credit</STYLE.Button></div>
            </STYLE.OrdersHistoryData>
        ) : (
            <STYLE.OrdersHistoryData>
                <div>
                    <div>Next payment ${nextPayment} USD</div>
                    <br />
                    <STYLE.Active>{date}</STYLE.Active>
                </div>
                <PaymentGraph />
                <div>
                    <div>Total to pay</div>
                    <STYLE.OrdersHistoryTitle alt>
                        {value} <STYLE.AnalyticsItemCurrency>USD</STYLE.AnalyticsItemCurrency>
                    </STYLE.OrdersHistoryTitle>
                </div>
            </STYLE.OrdersHistoryData>
        )}
    </STYLE.OrdersHistory>
  );
};

export default OrdersHistoryItem;

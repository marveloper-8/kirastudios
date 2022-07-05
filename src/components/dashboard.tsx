import { useState } from 'react';
import { AiOutlineExport, AiOutlineLineChart, AiOutlineRight } from 'react-icons/ai';
import { analytics, dashboard_navigation, history, orders_history } from 'resources/data';
import * as STYLE from 'styles/dashboard';
import AnalyticsItem from 'sub-components/dashboard/analytics';
import History from 'sub-components/dashboard/history';
import Navigation from 'sub-components/dashboard/navigation';
import OrdersHistoryItem from 'sub-components/dashboard/orders-history';
import NavigationItem from 'sub-components/dashboard/navigation-item';
import ScreenTimeGraph from 'widgets/screen-time-graph';

const Dashboard = () => {
    const [active, setActive] = useState(dashboard_navigation[0])
  return (
    <STYLE.Container>
        <STYLE.ContainerPrimary>
            <Navigation />
            <STYLE.Analytics>
                <STYLE.AnalyticsTitle>Jane's Dashboard</STYLE.AnalyticsTitle>
                <div>ID 456886943</div>
                <STYLE.AnalyticsWrapper>
                    {analytics.map((item: any, index: number) => {
                        return (
                            <AnalyticsItem
                                key={index}
                                label={item.label}
                                value={item.value}
                                currency={item.currency}
                                increase={item.increase}
                                percentage={item.percentage}
                            />
                        )
                    })}
                </STYLE.AnalyticsWrapper>
                <STYLE.SectionsNavigation>
                    {dashboard_navigation.map((item: any, index: number) => {
                        return (
                            <NavigationItem
                                key={index}
                                item={item}
                                active={item === active}
                                setActive={setActive}
                            />
                        )
                    })}
                </STYLE.SectionsNavigation>
            </STYLE.Analytics>
        </STYLE.ContainerPrimary>
        <STYLE.Section>
            <STYLE.OrdersHistoryWrapper>
                {orders_history.map((item: any, index: number) => {
                    return (
                        <OrdersHistoryItem
                            key={index}
                            title={item.title}
                            type={item.type}
                            transaction={item.transaction}
                            value={item.value}
                            nextPayment={item.nextPayment}
                            date={item.date}
                        />
                    )
                })}
            </STYLE.OrdersHistoryWrapper>
            <STYLE.OrdersHistoryWrapper>
                <div>
                    <STYLE.OrdersHistoryTitle>
                        <div>History</div>
                        <AiOutlineRight />
                    </STYLE.OrdersHistoryTitle>
                    {history.map((item: any, index: number) => {
                        return (
                            <History
                                key={index}
                                title={item.title}
                                time={item.time}
                                amount={item.amount}
                            />
                        )
                    })}
                </div>
                <div>
                    <STYLE.OrdersHistoryTitle>
                        <div>Other things</div>
                        <AiOutlineRight />
                    </STYLE.OrdersHistoryTitle>
                    <STYLE.OrdersHistoryWrapper>
                        <STYLE.OrdersHistory>
                            <STYLE.OtherThingsTitle>
                                <div>
                                    <div>Screen time</div>
                                    <STYLE.Active><h3>Payment details</h3></STYLE.Active>
                                </div>
                                <STYLE.OtherThingsTitleIcon>
                                    <AiOutlineExport />
                                </STYLE.OtherThingsTitleIcon>
                            </STYLE.OtherThingsTitle>
                            <ScreenTimeGraph />
                        </STYLE.OrdersHistory>
                        <STYLE.OrdersHistory alt>
                            <STYLE.TotalTimePrimary>
                                <STYLE.Active><h4>TOTAL TIME</h4></STYLE.Active>
                                <STYLE.TotalTime>
                                    <div>
                                        <div>This week</div>
                                        <STYLE.Active head>1h 27m</STYLE.Active>
                                    </div>
                                    <STYLE.AnalyticsItemIcon right>
                                        <AiOutlineRight />
                                    </STYLE.AnalyticsItemIcon>
                                </STYLE.TotalTime>
                            </STYLE.TotalTimePrimary>
                            <STYLE.TotalTimePrimary>
                            <STYLE.History alt>
                                <STYLE.AnalyticsItemIcon alt small>
                                    <AiOutlineLineChart />
                                </STYLE.AnalyticsItemIcon>
                                <div>
                                    <div>From last week</div>
                                    <STYLE.Active><h4>13%</h4></STYLE.Active><br />
                                </div>
                                <div>
                                    <AiOutlineRight />
                                </div>
                            </STYLE.History>
                        </STYLE.TotalTimePrimary>
                        </STYLE.OrdersHistory>
                    </STYLE.OrdersHistoryWrapper>
                </div>
            </STYLE.OrdersHistoryWrapper>
        </STYLE.Section>
    </STYLE.Container>
  );
};

export default Dashboard;

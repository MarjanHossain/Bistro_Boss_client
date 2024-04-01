import Cover from "../../Shared/Cover/Cover";
import orderCover from "../../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    return (
        <section>
            <Cover img={orderCover} heading={"Order food"} />

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad </Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>salad here........</TabPanel>
                <TabPanel>Pizza here...........</TabPanel>
                <TabPanel>Dessert here............</TabPanel>
                <TabPanel>lets drink............</TabPanel>
            </Tabs>
        </section>
    );
};

export default Order;
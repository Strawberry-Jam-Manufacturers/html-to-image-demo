import React from 'react';
import { Tab, TabContent, TabScreenshot, useScreenshot, useTabs } from './tab';

type Tabs = "one" | "two" | "three";

export function App() {
    const { tab, setTab } = useTabs<Tabs>(["one", "two", "three"]);
    const { dataURI } = useScreenshot(tab);
    return <div>
        <div id="target" style={{ border: '1px solid black' }}>
            <Tab<Tabs> name="one" selectedTab={tab} onClick={() => setTab("one")} />
            <Tab<Tabs> name="two" selectedTab={tab} onClick={() => setTab("two")} />
            <Tab<Tabs> name="three" selectedTab={tab} onClick={() => setTab("three")} />

            <TabContent name="one" selectedTab={tab}>
                <h1>hello world</h1>
            </TabContent>
            <TabContent name="two" selectedTab={tab}>
                <h1>asdf</h1>
            </TabContent>
            <TabContent name="three" selectedTab={tab}>
                <h1>qwerty</h1>
            </TabContent>
        </div>

        {dataURI &&
            <div>
                <h2>screenshot of above app</h2>
                <img src={dataURI} />
            </div>}
    </div>
}
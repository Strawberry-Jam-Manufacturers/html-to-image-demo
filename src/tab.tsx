import React, { useEffect, useState } from "react"
import * as htmlToImage from 'html-to-image';

export function useTabs<T>(tabs: T[]) {
    if (tabs.length <= 0) {
        throw new Error("useTabs requires tabs")
    }
    const [tab, setTab] = useState(tabs[0])

    return {
        tab,
        setTab,
    }
}

export function Tab<T>(props: {
    name: T,
    selectedTab: T,
    onClick: () => void,
}) {
    const backgroundColor = props.name === props.selectedTab ? "teal" : "grey";
    return <button style={{ backgroundColor }} onClick={props.onClick}>{`${props.name}`}</button>
}

export function TabContent<T>(props: {
    name: T,
    selectedTab: T,
    children: React.ReactNode,
}) {
    if (props.name !== props.selectedTab) {
        return null;
    }
    return <div>{props.children}</div>
}

export function useScreenshot<T>(selectedTab: T) {
    const [dataURI, setDataURI] = useState<string | null>(null)
    useEffect(() => {
        async function updateDataURI() {
            const componentRef = document.getElementById('target');
            if (componentRef) {
                componentRef.style.maxHeight = '100vh';
                setDataURI(await htmlToImage.toJpeg(componentRef, { backgroundColor: "#fff" }));
            }
        }
        updateDataURI();
    }, [selectedTab]);

    return { dataURI }
}
export function TabScreenshot<T>(props: {
    selectedTab: T,
}) {
    const { dataURI } = useScreenshot(props.selectedTab);
    return <div>
        <h1>Tab Screenshot</h1>
        {dataURI && <img src={dataURI} />}
    </div>
}
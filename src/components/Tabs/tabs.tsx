import React, { useState, createContext } from 'react'
import classNames from 'classnames'
import { TabsItemProps } from './tabsItem'

type SelectCallback = (selectedIndex: number) => void

export interface TabsProps {
    defaultIndex?: number;
    className?: string;
    onSelect?: SelectCallback;
    style?: React.CSSProperties;
}

interface ITabsContext {
    index: number,
    onSelect?: SelectCallback
}

export const TabsContext = createContext<ITabsContext>({ index: 0 })

const Tabs: React.FC<TabsProps> = props => {
    const {
        style,
        className,
        children,
        onSelect,
        defaultIndex
    } = props

    const [ currentActive, setActive ] = useState(defaultIndex)

    const handleClick = (index: number) => {
        setActive(index)
        if (onSelect) {
            onSelect(index)
        }
    }

    const passedContext: ITabsContext = {
        index: currentActive || 0,
        onSelect: handleClick
    }

    const classes = (index: number) => {
        return classNames('popular-tabs-content-child', className, {
            'tabs-content-child-is-active': currentActive === index
                })
    }

    const renderChildrenContent = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<TabsItemProps>
            const { displayName } = childElement.type
            if (displayName === 'TabsItem') {
                return React.cloneElement(<li className={classes(index)}>{childElement.props.children}</li>, {
                    index
                })
            }
        })
    }

    const renderChildrenTabs = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<TabsItemProps>
            const { displayName } = childElement.type
            if (displayName === 'TabsItem') {
                return React.cloneElement(childElement, {
                    index
                })
            }
        })
    }

    return (
        <div className='popular-tabs' style={style}>
            <TabsContext.Provider value={passedContext}>
                <ul className='popular-tabs-title'>
                    {renderChildrenTabs()}
                </ul>
                <ul className='popular-tabs-content'>
                    {renderChildrenContent()}   
                </ul>
            </TabsContext.Provider>
        </div>
    )
}

Tabs.defaultProps = {
    defaultIndex: 0
}

export default Tabs
import React, { useContext } from 'react'
import classNames from 'classnames'
import { TabsContext } from './tabs'

export interface TabsItemProps {
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    index?: number
}

const TabsItem: React.FC<TabsItemProps> = props => {
    const {
        disabled,
        className,
        style,
        index,
        children
    } = props

    const context = useContext(TabsContext)

    const classes = classNames('tabs-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    })

    const handleClick = () => {
        if (context.onSelect && !disabled && (typeof index === 'number')) {
            context.onSelect(index)
        }
    }

    return (
        <li 
            className={classes}
            style={style}
            onClick={handleClick}
        >
            {children}
        </li>
    )

}

TabsItem.displayName = 'TabsItem'

export default TabsItem
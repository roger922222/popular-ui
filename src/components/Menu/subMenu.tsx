import React, { useContext, FunctionComponentElement, useState } from 'react'
// import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'

export interface SubMenuProps {
    index?: string;
    title: string;
    className?: string;
}

const SubMenu: React.FC<SubMenuProps> = ({
    index, title, children, className
}) => {
    const context = useContext(MenuContext)

    const openedSubMenus = context.defaultOpenSubMenus as Array<string>

    const isOpen = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false

    const [menuOpen, setOpen] = useState(isOpen)

    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index
    })

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setOpen(!menuOpen)
    }

    let timer:any

    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        clearTimeout(timer)
        e.preventDefault()
        timer = setTimeout(() => {
            setOpen(toggle)
        }, 300)
    }

    const clickEvents = context.mode === 'vertical' ? {
        onClick: handleClick
    } : {}

    const hoverEvents = context.mode !== 'vertical' ? {
        onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true) },
        onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false) } 
    } : {}

    const renderChildren = () => {
        const subMenuClasses = classNames('popular-submenu', {
            'menu-opened': menuOpen,
            'popular-submenu-horizontal': context.mode !== 'vertical'
        })
        const childrenComponent = React.Children.map(children, (child, i) => {
            const childElement = child as FunctionComponentElement<MenuItemProps>
            if (childElement.type.displayName === 'MenuItem') {
                return React.cloneElement(childElement, {
                    index: `${index}-${i}`
                })
            } else {
                console.error('Warning: Menu has a child which is not a MenuItem component ');
            }
        })
        return (
            // <CSSTransition
            //     in={menuOpen}
            //     timeout={300}
            //     classNames='zoom-in-toop'
            //     appear
            // >
                <ul className={subMenuClasses}>
                    {childrenComponent}
                </ul>
            // </CSSTransition>
        )
    }

    return (
        <li key={index} className={classes} {...hoverEvents}>
            <div className='submenu-title' {...clickEvents}>
                {title}
            </div>
            {
                renderChildren()
            }
        </li>
    )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu
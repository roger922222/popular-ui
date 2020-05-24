import React from 'react'
import classNames from 'classnames'
import Button from '../Button/button'

export type alertType = 'success' | 'info' | 'warning' | 'error'

export interface AlertProps {
    type?: alertType,
    title?: string,
    text: string,
    className?: string,
    isBg?: boolean,
    textOk?: string,
    textCancel?: string,
    ok?: () => void,
    cancel?: () => void
}

const Alert: React.FC<AlertProps> = props => {
    const { className, type, title, text, isBg, textOk, textCancel, ok, cancel, ...restProps } = props

    const classes = classNames('popular-alert-model', className, {
        [`alert-${type}`]: type,
        'alert-web': /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)
    })

    let style = textOk ? textCancel ? { width: '45%' } : { width: '80%' } : {}

    const handleOk = () => {
        ok && ok()
    }

    const handleCancel = () => {
        cancel && cancel()
    }

    return (
        <div className='popular-alert' data-testid="test-alert" {...restProps}>
            {
                isBg ? <div className='popular-alert-bg' title='test-bg' /> : null
            }
            <div className={classes} title='test-content'>
                {
                    title ? <div className='popular-alert-title'>{title}</div> : null
                }
                {
                    text ? <div className='popular-alert-text'>{text}</div> : null
                }
                {
                    textOk ? <div className='popular-alert-btn'>
                        {textOk ? <Button className='popular-alert-left' style={style} btnType='primary' onClick={handleOk}>{textOk}</Button> : ''}
                        {textCancel ? <Button className='popular-alert-right' style={style} onClick={handleCancel}>{textCancel}</Button> : ''}
                </div> : null}
            </div>
        </div>
    )
}

export default Alert
import React from 'react'
import { render, RenderResult, fireEvent } from '@testing-library/react'
import Alert, { AlertProps } from './alert'

const testProps: AlertProps = {
    text: '测试',
    title: '测试',
    className: 'test',
    type: 'success',
    isBg: true,
    textOk: '确定'
}

const generateAlert = (props: AlertProps) => {
    return (
        <Alert {...props} />
    )
}

let wrapper: RenderResult, alertElement: HTMLElement, bgElement: HTMLElement, contentElement: HTMLElement
 
describe('test Alert component', () => {
    beforeEach(() => {
        wrapper = render(generateAlert(testProps))
        alertElement = wrapper.getByTestId('test-alert')
        bgElement = wrapper.getByTitle('test-bg')
        contentElement = wrapper.getByTitle('test-content')
    })
    it('should render correct Alert based on success props', () => {
        expect(alertElement).toBeInTheDocument()
        expect(alertElement).toHaveClass('popular-alert')
        expect(alertElement.querySelectorAll(':scope > div').length).toEqual(2)
        expect(bgElement).toHaveClass('popular-alert-bg')
        expect(contentElement).toHaveClass('popular-alert-model')
    })
    it('click button change ok and cancel', () => {
        const btnOk = wrapper.getByText('确定')
        fireEvent.click(btnOk)
    })
})
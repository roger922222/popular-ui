import React from 'react'
import { render } from '@testing-library/react' 
import Button from './button'

test('our first react test case', () => {
    const wrapper = render(<Button>Nice</Button>)
    const element = wrapper.queryByText('Nice')
    expect(element).toBeTruthy()
})

describe('test Button component', () => {
    test('should render the correct default button', () => {
        const wrapper = render(<Button>Nice</Button>)
        const element = wrapper.getByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-default')
    })
    it('should render the correct component based on different props', () => {

    })
    it('should render a link when btnType equals link and href is provided', () => {

    })
    test('should render disabled button when disabled set to true', () => {

    })
})
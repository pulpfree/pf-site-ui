import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
// import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom'
import { Button } from './Button'
import { BrowserRouter } from 'react-router'
// import { logRoles } from '@testing-library/dom'

// const renderWithRouter = (ui: React.ReactElement) => {
//   return render(ui, { wrapper: BrowserRouter })
// }

describe('Button', () => {
  it('renders as a button when no href or to prop is provided', () => {
    // const { getByRole, getByText, debug, container } = render(<Button>Click me</Button>)
    const { getByRole, getByText } = render(<Button>Click me</Button>)
    // debug()
    // logRoles(document.body)
    // logRoles(container)
    expect(getByRole('button')).toBeInTheDocument()
    expect(getByText('Click me')).toBeInTheDocument()
  })

  it('renders as a Link when to prop is provided', () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Button to='/some-path'>Navigate</Button>
      </BrowserRouter>,
    )
    const link = getByRole('link')
    // console.log('tagName: ', link.tagName)
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/some-path')
  })

  it('applies correct styles based on invert prop', () => {
    const { getByRole, rerender } = render(<Button>Default</Button>)
    expect(getByRole('button')).toHaveClass('bg-slate-950', 'text-white')

    rerender(<Button invert>Inverted</Button>)
    expect(getByRole('button')).toHaveClass('bg-white', 'text-slate-950')
  })

  it('merges custom className with default classes', () => {
    const { getByRole } = render(<Button className='custom-class'>Custom</Button>)
    expect(getByRole('button')).toHaveClass('custom-class')
    expect(getByRole('button')).toHaveClass('inline-flex', 'rounded-full')
  })
})

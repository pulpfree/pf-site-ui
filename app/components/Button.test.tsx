/* import { describe, it, expect, vi } from 'vitest'
import Button from './Button'
import { shallow } from 'enzyme'

describe('Button Component', () => {
  it('renders correctly', () => {
    const button = shallow(<Button>Click Me</Button>)
    expect(button.text()).toBe('Click Me')
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    const button = shallow(<Button onClick={handleClick}>Click Me</Button>)
    button.simulate('click')
    expect(handleClick).toHaveBeenCalled()
  })
})
 */

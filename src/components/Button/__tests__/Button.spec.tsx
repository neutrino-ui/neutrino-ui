import { Button } from '..'
import render from 'utils/test-renderer'
import 'utils/jest'

describe('Button Component', () => {
  it('Button renders', () => {
    const { container } = render(<Button>Test</Button>)

    const node = container.querySelector('button')
    expect(node?.textContent).toBe('Test')
  })
})

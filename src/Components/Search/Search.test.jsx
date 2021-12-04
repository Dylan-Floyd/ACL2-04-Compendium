import { render } from '@testing-library/react'
import Search from './Search.jsx'

it('Should render the Search component', () => {
  const { container } = render(<Search searchTerm='bob' />)
  expect(container).toMatchSnapshot()
})
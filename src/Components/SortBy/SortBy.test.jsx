import { render } from '@testing-library/react'
import SortBy from './SortBy.jsx'

it('Should render the SortBy component', () => {
  const { container } = render(<SortBy />)
  expect(container).toMatchSnapshot()
})
import { render } from '@testing-library/react'
import SortOrder from './SortOrder.jsx'

it('Should render the SortOrder component', () => {
  const { container } = render(<SortOrder />)
  expect(container).toMatchSnapshot()
})
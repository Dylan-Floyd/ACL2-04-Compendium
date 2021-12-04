import { render } from '@testing-library/react'
import Select from './Select.jsx'

it('Should render a Select component', () => {
  const { container } = render(<Select
    label='bob'
    selectedOption='1'
    optionsList={['1', '2']}
  />)
  expect(container).toMatchSnapshot()
})
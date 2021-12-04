import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const headerEl = screen.getByText(/pokedex/i)
  const searchEl = screen.getByText(/Search by Name:/i)
  const selectEl = screen.getByText(/select a type/i)
  const sortByEl = screen.getByText(/sort by/i)
  const sortOrderEl = screen.getByText(/Sort Order/i)
  expect(headerEl).toBeInTheDocument()
  expect(searchEl).toBeInTheDocument()
  expect(selectEl).toBeInTheDocument()
  expect(sortByEl).toBeInTheDocument()
  expect(sortOrderEl).toBeInTheDocument()
})

import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Todo from '../components/Todo'

describe('<Todo />', () => {
  it('should be able to add new todo', () => {
    render(<Todo />)

    const input = screen.getByTestId("input-add-todo");
    const form = screen.getByRole('form');

    userEvent.type(input, "Café");
    fireEvent.submit(form);

    expect(screen.getByTestId("Café")).toBeInTheDocument()
    
  })

  it('should be able to list three todo', () => {
    render(<Todo />)

    const input = screen.getByTestId("input-add-todo");
    const form = screen.getByRole('form');
    fireEvent.change(input, { target: { value: 'Cafe'} });
    fireEvent.submit(form);
    fireEvent.change(input, { target: { value: 'Leite'} });
    fireEvent.submit(form);
    fireEvent.change(input, { target: { value: 'Cerveja'} });
    fireEvent.submit(form);

    const todoList = screen.getByTestId("ul-todos")
    // eslint-disable-next-line testing-library/no-node-access
    expect(todoList.children.length).toBe(3)

  })

  it('should be able to delete one todo', () => {
    render(<Todo />)

    const input = screen.getByTestId("input-add-todo");
    const form = screen.getByRole('form');

    userEvent.type(input, 'Cerveja');
    fireEvent.submit(form);

    expect(screen.getByTestId('Cerveja')).toBeTruthy()

    const btnDelete = screen.getByTestId('Cerveja-btn-delete');
    userEvent.click(btnDelete);


    expect(screen.queryByTestId('Cerveja')).toBeNull()
  })
  
})
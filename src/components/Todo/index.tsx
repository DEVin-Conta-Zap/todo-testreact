import { useState } from 'react'

const Todo = () => {

  const [todoItem, setTodoItem] = useState('')
  const [todoList, setTodoList] = useState<string[]>([])

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    if(!todoItem || todoList.includes(todoItem)) return;

    setTodoList([...todoList, todoItem])
    setTodoItem('');
  }

  const handleDelete = (item: string) => {
    setTodoList(todoList.filter(todoItem => todoItem !== item));
  }

  return (
    <>
      <form onSubmit={handleOnSubmit} aria-label="Formulário Todo">
        <input
          type="text"
          value={todoItem}
          data-testid="input-add-todo"
          onChange={e => setTodoItem(e.target.value)}
        />
        <button type='submit'>Salvar</button>
      </form>

      <ul data-testid="ul-todos">
        {todoList.map(todoItem => (
          <li key={todoItem} data-testid={todoItem}>
            {todoItem} {" "}
            <button type='button' 
              data-testid={`${todoItem}-btn-delete`} 
              onClick={() => handleDelete(todoItem)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo
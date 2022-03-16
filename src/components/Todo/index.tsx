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
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={todoItem}
          onChange={e => setTodoItem(e.target.value)}
        />
        <button type='submit'>Salvar</button>
      </form>

      <ul>
        {todoList.map(todoItem => (
          <li key={todoItem}>
            {todoItem} {" "}
            <button type='button' onClick={() => handleDelete(todoItem)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo
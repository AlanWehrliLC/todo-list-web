import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TodoList } from "./components/TodoList";
import { todoGetAll } from "./storage/todo/todoGetAll";

type todoList = {
  id: string
  todo: string
  done: boolean
}

export function App() {
  const [todoList, setTodoList] = useState<todoList[]>([])
    
  useEffect(()=>{
      setTodoList(todoGetAll())
  }, [])

  function handleUpdateList(){
    setTodoList(todoGetAll())
  }

  return (
    <>
      <Header />
      <NewTask updateList={handleUpdateList} />
      <TodoList todoList={todoList} updateList={handleUpdateList} />
    </>
  )
}

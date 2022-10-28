import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TodoList } from "./components/TodoList";

export function App() {

  return (
    <>
      <Header />
      <NewTask />
      <TodoList />
    </>
  )
}

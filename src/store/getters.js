export default {
  doneTodos(state){
    return state.todos.filter(todo => todo.id === 1)
  }
}
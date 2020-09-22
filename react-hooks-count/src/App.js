import React, { useState, useEffect} from 'react'

const App = () => {

  const [type, setType] = useState('user')

  useEffect(() => {
    console.log('Type changed', type)
  },[type])

  const onSetUsers = () => {
    setType('users')
  }

  const onSetTodos = () => {
    setType('todos')
  }

  // const onSetPost = () => {
  //   setType('post')
  // }

  return (
    <div>
      <h1>Resurs: {type}</h1>
      <button className="btn btn-primary" onClick={onSetUsers}>users</button>
      <button className="btn btn-success" onClick={onSetTodos}>todos</button>
      <button className="btn btn-danger" onClick={()=>setType('posts')}>posts</button>
    </div>
  )

}

export default App;

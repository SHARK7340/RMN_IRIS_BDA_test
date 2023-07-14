import {useState} from 'react'
import AddTaskForm from './components/AddTaskForm'
import UpdateForm from './components/UpdateForm'
import ToDo from './components/ToDo'
import 'bootstrap/dist/css/bootstrap.min.css'
import DataTable from 'react-data-table-component'
import './App.css'

function App() {
  // Tasks (ToDo List) State
  const [toDo, setToDo] = useState([
    // {id: 1, title: "Task 1", status: false},
    // {id: 2, title: "Task 2", status: false}
  ])

  //Temp state
  const [newTask, setNewTask] = useState('')
  const [updateData, setUpdateData] = useState('')

  // Add task
  const addTask = () => {
    if(newTask){
      let num = toDo.length + 1

      setToDo([...toDo, {"id": num, "title": newTask, "status": false}])
      setNewTask('')
    }
  }

  // Delete task
  const deleteTask = (id) => {
    setToDo(toDo.filter(task => task.id != id))
  }

  // Mark task as done or completed
  const markDone = (id) => {
    // let newTasks = toDo.map(task => {
    //   if(task.id === id){
    //     return ({...task, status: !task.status})
    //   }

    //   return task
    // })

    // setToDo(newTasks)

    // refactored
    setToDo(toDo.map(
      task => task.id === id
      ? ({...task, status: !task.status})
      : task
    ))
  }

  // Cancel update
  const cancelUpdate = () => {
    setUpdateData('')
  }

  // Change task for update
  const changeHolder = (e) => {
    // let newEntry = {
    //   id: updateData.id,
    //   title: e.target.value,
    //   status: updateData.status ? true : false
    // }

    // setUpdateData(newEntry)

    // refactored
    setUpdateData({
      ...updateData,
      title: e.target.value
    })
  }

  // Update task
  const updateTask = () => {
    // let filterRecords = [...toDo].filter(task => task.id !== updateData.id)
    // let updatedObject = [...filterRecords, updateData]
    
    // setToDo(updatedObject)

    // refactored
    let removeOldRecord = [...toDo].filter(task => task.id !== updateData.id)

    setToDo([
      ...removeOldRecord,
      updateData
    ])
    setUpdateData('')
  }

  //Datatable
  const columns = [
    {
        name: 'Title',
        selector: row => row.title
    },
    {
        name: 'Year',
        selector: row => row.year
    },
  ]

  const data = [
      {
          id: 1,
          title: 'Beetlejuice',
          year: '1988'
      },
      {
          id: 2,
          title: 'Ghostbusters',
          year: '1984'
      }
  ]

  return (
    <div className="container App">
      <br /><br />
      <h2>To Do list App (React JS)</h2>
      <br /><br />
      
      {updateData ? (
        <UpdateForm
          updateData={updateData}
          changeHolder={changeHolder}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {/* Display ToDos */}
      {toDo && toDo.length ? '' : 'No Task...'}

      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />

      <br/><br/><br/>
      <DataTable
          columns={columns}
          data={data}
      />
    </div>
  )
}

export default App

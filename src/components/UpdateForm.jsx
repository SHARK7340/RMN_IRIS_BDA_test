const UpdateForm = ({updateData, changeHolder, updateTask, cancelUpdate}) => {
    return(
        <>
          {/* UPDATE TASK */}
          <div className='row'>
            <div className='col'>
              <input
                className='form-control form-control-lg'
                value={updateData && updateData.title}
                onChange={(e) => changeHolder(e)}
              />
            </div>
            <div className='col-auto'>
              <button
                className='btn btn-lg btn-success mr-20'
                onClick={updateTask}
              >
                Update
              </button>
              <button
                className='btn btn-lg btn-warning mr-20'
                onClick={cancelUpdate}
              >
                Cancel
              </button>
            </div>
          </div>
          <br />
        </>
    )
}

export default UpdateForm
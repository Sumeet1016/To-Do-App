const TableList=({tasks,deleteTask})=>{

    return  (
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">TASK</th>
      <th scope="col">DATE</th>
      <th scope="col">DELETE</th>
    </tr>
  </thead>
  <tbody>
    {tasks.map((task,index)=>(
    <tr key={task.id}>
      <th scope="row">{index+1}</th>
      <td>{task.text}</td>
      <td>{task.date}</td>
      <td>
        <button type="button"
         className="btn btn-danger"
         onClick={()=>deleteTask(task.id)}>
          Delete</button>

      </td>
</tr>
))}
  </tbody>
  </table>
    )
}

export default TableList;
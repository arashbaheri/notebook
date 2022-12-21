import './index.css'

import { Badge, Button, FormGroup, Input, Label } from 'reactstrap'

import { BsPlusLg } from 'react-icons/bs'
import { taskList } from './taskList'

const Tasks = () => {
  return (
    <div className='mx-4'>
      <div className='d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-center'>
          {/* <Badge className='task-badge'>3</Badge> */}
          <h5 className='pt-4-2'>Today Tasks</h5>
          {/* <span className='mx-2 task-title-badge'>Today Tasks</span> */}
        </div>
        <div className='px-1 d-flex align-items-center'>
          <BsPlusLg size={18} color='#58409e' className='add-new-task-icons' />
        </div>
      </div>
      <div className='mt-3 task-list-container'>
        {taskList.map((task) => {
          return (
            <div key={task.id} className='d-flex justify-content-between my-3'>
              <div className='task-item-title'>
                <FormGroup check>
                  <Input type='checkbox' /> <Label check>{task.title}</Label>
                </FormGroup>
              </div>
              <div className='task-item-time px-1'>{task.date}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tasks

import {useReducer, useState} from 'react'

let nextTaskId = 3
const initTasks = [
    {taskId: 0, content: 'visit museum', isDone: true},
    {taskId: 1, content: 'watch show', isDone: false},
    {taskId: 2, content: 'walk street', isDone: false}
]
//파라미터 첫번째가 state, 두번째가 action.
function tasksReducer(tasks, action) {
    let nextTasks

    switch(action.type) {
        case 'addTask': {
            nextTasks = [
                //spread로 기존 array를 원소로 집어넣는다.
                ...tasks,
                {
                    taskId: action.taskId,
                    content: action.content,
                    isDone: false
                }
            ]
        }; break
        case 'fixTask': {
            let item
            nextTasks = tasks.map(task => {
                if(task.taskId === action.task.taskId)
                //item을 action에 들어있는 task로 덮어씌운다.(수정)
                    item = action.task
                //나머지 task는 그대로 item에 들어간다.
                else item = task
                return item
            })
        }; break
        case 'delTask': {
            //삭제할 요소만 제외하고 nextTasks를 생성한다.(삭제효과)
            nextTasks = tasks.filter(task => task.taskId !== action.taskId)
        }; break
        default: throw Error('unknown type: ' + action.type)
    }

    return nextTasks
}

export default function Diary() {
    const [tasks, dispatch] = useReducer(tasksReducer, initTasks)

    function addTask(content) {
        dispatch({
            type: 'addTask',
            taskId: nextTaskId++,
            content
        })
    }

    function fixTask(task) {
        dispatch({
            type: 'fixTask',
            task
        })
    }

    function delTask(taskId) {
        dispatch({
            type: 'delTask',
            taskId
        })
    }

    return (
        <>
            <h1>diary</h1>
            <AddTask addTask={addTask}/>
            <TaskList
                tasks={tasks}
                fixTask={fixTask}
                delTask={delTask}/>
        </>
    )
}

function AddTask({addTask}) {
    const [content, setContent] = useState('')

    return (
        <>
            <input
                placeholder='add task'
                value={content}
                onChange={e => setContent(e.target.value)}/>
            <button onClick={() => {
                setContent('')
                addTask(content)
            }}>add
            </button>
        </>
    )
}

function TaskList({tasks, fixTask, delTask}) {
    return (
        <ul>
            {tasks.map(task => (
                //react에서 iterating하는 객체는 무조건 key를 가지고 있어야한다.
                <li key={task.taskId}>
                    <Task task={task}
                        fixTask={fixTask}
                        delTask={delTask}/>
                </li>
            ))}
        </ul>
    )
}

function Task({task, fixTask, delTask}) {
    const [isEditing, setIsEditing] = useState(false)

    let taskItem
    if(isEditing) {
        taskItem = (
            <>
                <input value={task.content}
                    onChange={e => fixTask({
                        //taskId content isDone을 spread
                        ...task,
                        //content 속성을 또 쓰면 기존 content가 교체된다.
                        content: e.target.value
                    })}/>
                <button onClick={() => setIsEditing(false)}>save</button>
            </>
        )
    } else {
        taskItem = (
            <>
                {task.content}
                <button onClick={() => setIsEditing(true)}>edit</button>
            </>
        )
    }

    return (
        <label>
            <input type='checkbox'
                checked={task.isDone}
                onChange={e => fixTask({
                    ...task,
                    isDone: e.target.checked
                })}/>
                {taskItem}
                <button onClick={() => delTask(task.taskId)}>del</button>
        </label>
    )
}
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from "react-router-dom";
import { Button, Table, DatePicker, Input } from 'antd';
import 'antd/dist/antd.min.css';
const { RangePicker } = DatePicker;
const temptasks = [
    {id:uuidv4(),task:"task1",description:"description1",start:100,end:200},
    {id:uuidv4(),task:"task2",description:"description2",start:100,end:200}
]
function ToDo(){
    const [tasks, setTasks] = useState(temptasks)
    const [search, setSearch] = useState("")
    const [task, setTask] = useState('')
    const [description, setDescription] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    let history = useHistory()
    const add = e => {
        if(task !== '' && description !== '' && start !== '' && end !== ''){
            setTasks(prev=>{
                return [...prev,{task,description,start,end,id:uuidv4(),}]
            })
            resetform()
        }
    }  
    const remove = id =>{
        setTasks(prev=>{
            prev = prev.filter(item => item.id !== id)
            return prev
        })
    }
    const resetform = e =>{
        setTask("")
        setDescription("")
        setStart("")
        setEnd("")
    }
    const setDate = e =>{
        setStart(e[0].valueOf())
        setEnd(e[1].valueOf())
    }
    const getstatus = a =>{
        let status = "1_scheduled"
        let {start,end} = a
        let time_now = (new Date()).getTime()  
        if(time_now < start){
            status = "1_scheduled"
        }else if(time_now > start && time_now < end){
            status = "2_running"
        }else if(time_now > end){
            status = "3_expired"
        }
        return status
    }
    console.log(tasks)
    let filteredTasks = !search ? tasks : tasks.filter(item=>item.task.includes(search))
    return (
        <div>
            <input type="text" placeholder="task " value={task} onChange={e=>setTask(e.target.value)}/>
            <input type="text" placeholder="description" value={description} onChange={e=>setDescription(e.target.value)}/>
            <RangePicker onChange={setDate}/>
            <button onClick={add}>Click me</button>
            <div>
                <input placeholder="search" value={search} onChange={e=>setSearch(e.target.value)} />
            </div>
            <Table columns={
                [
                    {
                        title: 'task',
                        dataIndex: 'task',
                        key: 'task',
                        filterMode: 'tree',
                        filterSearch: true,
                        onFilter: (key, record) => record.task.contains(key),
                        sorter: (a, b) => a.task > b.task ? 1 : -1,
                        sortDirections: ['ascend','descend'],
                    },
                    {
                        title: 'description',
                        dataIndex: 'description',
                        key: 'description',   
                        defaultSortOrder: 'descend',
                        sorter: (a, b) => a.description > b.description ? 1 : -1,
                    },
                    {
                        title: 'status',
                        dataIndex: 'start',
                        key: 'start',
                        filterSearch: true,
                        onFilter: (start, record) => record.start.indexOf(start) === 0,
                        sorter: (a, b) =>{
                            let status_a = getstatus(a)
                            let status_b = getstatus(b)
                            return status_a > status_b ? 1 : -1
                        } ,
                        render:(value,item)=>{
                            let status = getstatus(item)
                            return (
                                <div>
                                    {status.split("_")[1]}
                                    <br />
                                    <br />
                                    <Button onClick={() => remove(item.id)}>Delete</Button>
                                </div>
                            )
                        }
                    }
                ]
            } dataSource={filteredTasks} />
        </div>
    )
}


export default ToDo
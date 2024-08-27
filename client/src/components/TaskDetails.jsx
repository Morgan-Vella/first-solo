import React, { useEffect, useState } from 'react'
import Header from './Header';
import { House } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const TaskDetails = () => {
    const [task, setTask] = useState([])
    const navigate = useNavigate();

    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/tasks/${id}`)
            .then(res => {
                console.log(res.data);
                setTask(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])

    const deleteTask = () => {
        axios.delete(`http://localhost:8000/api/tasks/${id}`)
            .then((res) => {
                console.log(res.data);
                navigate('/')
            })
    }
    return (
        <div className="h-screen bg-gray-100">
            <Header />
            <div className="container mx-auto p-4 mt-8">
                <div className="flex flex-col gap-2">
                    <label className="input-label">TITLE</label>
                    <div className="text-2xl text-slate-950 outline-none bg-slate-100 p-2">
                        <p>{task.title}</p>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <label className="input-label">DESCRIPTION</label>
                        <div className="text-sm text-slate-950 outline-none bg-slate-100 p-2 rounded">
                            <p>{task.description}</p>
                        </div>
                    </div>
                    <label className="input-label">Location</label>
                    <div className="text-sm text-slate-950 outline-none bg-slate-100 p-2">
                        <p>{task.location}</p>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <button className="btn-primary bg-red-500 font-medium mt-5 p-3" onClick={deleteTask} >Delete</button>
                    </div>
                </div>
            </div>
            <Link to="/"><button className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary text-white hover:scale-105 transition-all ease-in-out absolute right-10 bottom-10">
                <House />
            </button>
            </Link>
        </div>
    )
}

export default TaskDetails

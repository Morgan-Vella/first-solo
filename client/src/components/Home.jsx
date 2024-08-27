import React, { useEffect, useState } from 'react'
import { ListPlus, SquarePen, Trash2 } from "lucide-react"
import Header from './Header'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const [tasks, setTasks] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/tasks")
            .then((res) => {
                console.log(res.data);
                setTasks(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div className="h-screen bg-gray-100">
            <Header />
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-4 mt-8">
                    {
                        tasks.map((task, index) => (
                            <Link to={`/tasks/${task._id}`}>
                                <div key={index} className="border rounded p-4  bg-white hover:cursor-pointer hover:shadow-xl hover:scale-105 transition-all ease-in-out">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h6 className="text-sm font-medium">{task.title}</h6>
                                            <span className="text-xs text-slate-500">{task.location}</span>
                                        </div>
                                        <Link to={`/tasks/update/${task._id}`}>
                                            <button className="icon-btn text-emerald-500"> <SquarePen /> </button>
                                        </Link>
                                    </div>
                                    <div className="flex items-center justify-between ">
                                        <p className="text-xs text-slate-600 mt-2">{task.description?.slice(0, 60)}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div >
            <Link to="/tasks/create"><button className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary text-white hover:scale-105 transition-all ease-in-out fixed right-10 bottom-10">
                <ListPlus />
            </button>
            </Link>
        </div>
    )
}

export default Home

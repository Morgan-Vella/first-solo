import React, { useEffect, useState } from 'react'
import Header from './Header';
import { House } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateTask = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/tasks/${id}`)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.title);
                setDescription(res.data.description)
                setLocation(res.data.location)
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])

    const handlers = {
        "title": (e) => {
            setTitle(e.target.value);
        },
        "description": (e) => {
            setDescription(e.target.value);
        },
        "location": (e) => {
            setLocation(e.target.value);
        },
        "submit": (e) => {
            e.preventDefault();
            axios.put(`http://localhost:8000/api/tasks/${id}`, {
                title,
                description,
                location
            })
                .then((res) => {
                    console.log(res)
                    console.log(res.data)
                    navigate("/")
                })
                .catch(error => {
                    console.log(error)
                    console.log(error.response.data.errors)
                    setErrors(error.response.data.errors)
                })
        },
    }
    return (
        <div className="h-screen bg-gray-100">
            <Header />
            <div className="flex items-center justify-center">
                <div className="rounded-lg bg-white p-4 w-2/3 mt-20">
                    <form onSubmit={handlers.submit} className="container mx-auto p-4 mt-8">
                        <div className="flex flex-col gap-2">
                            <label className="input-label">TITLE</label>
                            <input type="text"
                                className="text-2xl text-slate-950 outline-none bg-slate-100 p-2"
                                placeholder="Go To Gym at 6"
                                value={title}
                                onChange={handlers.title}
                            />
                            {errors.title && <p className="text-red-500 text-xs pt-4">{errors.title.message}</p>}
                            <div className="flex flex-col gap-2 mt-4">
                                <label className="input-label">DESCRIPTION</label>
                                <textarea
                                    type="text"
                                    className="text-sm text-slate-950 outline-none bg-slate-100 p-2 rounded"
                                    placeholder="Conent"
                                    rows={10}
                                    value={description}
                                    onChange={handlers.description}
                                />
                                {errors.description && <p className="text-red-500 text-xs pt-4">{errors.description.message}</p>}
                            </div>
                            <label className="input-label">Location</label>
                            <input type="text"
                                className="text-sm text-slate-950 outline-none bg-slate-100 p-2"
                                placeholder="Location"
                                value={location}
                                onChange={handlers.location}
                            />
                            {errors.location && <p className="text-red-500 text-xs pt-4">{errors.location.message}</p>}
                            <div className="flex items-center justify-center w-full">
                                <button className="btn-primary font-medium mt-5 p-3" type="submit">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Link to="/"><button className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary text-white hover:scale-105 transition-all ease-in-out absolute right-10 bottom-10">
                <House />
            </button>
            </Link>
        </div>
    )
}

export default UpdateTask

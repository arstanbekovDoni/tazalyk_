import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const ForgotPassword = () => {

    const { id, token } = useParams();

    const history = useNavigate();

    const [data2, setData] = useState(false);

    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");

    const userValid = async () => {
        const res = await fetch(`/forgotpassword/${id}/${token}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json()

        if (data.status == 201) {
            console.log("user valid")
        } else {
            history("*")
        }
    }


    const setval = (e) => {
        setPassword(e.target.value)
    }

    const sendpassword = async (e) => {
        e.preventDefault();

        if (password === "") {
            toast.error("Введите пароль!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("Пароль должен быть больше 6 символов!", {
                position: "top-center"
            });
        } else {
            const res = await fetch(`/${id}/${token}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ password })
            });

            const data = await res.json()

            if (data.status == 201) {
                setPassword("")
                setMessage(true)
            } else {
                toast.error("! Token Expired generate new LInk",{
                    position: "top-center"
                })
            }
        }
    }

    useEffect(() => {
        userValid()
        setTimeout(() => {
            setData(true)
        }, 3000)
    }, [])

    return (
        <>
            {
                data2 ? (
                    <>
                        <section>
                            <div className="form_data">
                                <div className="form_heading">
                                    <h1>Новый пароль</h1>
                                </div>

                                <form>
                                    {message ? <p style={{ color: "green", fontWeight: "bold" }}>Пароль успешно изменен </p> : ""}
                                    <div className="form_input">
                                        <label htmlFor="password">Новый пароль</label>
                                        <input type="password" value={password} onChange={setval} name="password" id="password" placeholder='Введите ваш новый пароль' />
                                    </div>

                                    <button className='btn' onClick={sendpassword}>Send</button>
                                </form>
                                <p><NavLink to="/">Домой</NavLink></p>
                                <ToastContainer />
                            </div>
                        </section>
                    </>
                ) : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    Загрузка... &nbsp;
                    <CircularProgress />
                </Box>
            }
        </>
    )
}

export default ForgotPassword

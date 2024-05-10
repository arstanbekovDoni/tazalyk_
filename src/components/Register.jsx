import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./mix.css";
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const Register = () => {

    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setCPassShow] = useState(false);

    const [inpval, setInpval] = useState({
        fname: "",
        email: "",
        password: "",
        cpassword: ""
    });


    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };

    const addUserdata = async (e) => {
        e.preventDefault();

        const { fname, email, password, cpassword } = inpval;

        if (fname === "") {
            toast.warning("Введите ваше имя!", {
                position: "top-center"
            });
        } else if (email === "") {
            toast.error("Введите почту!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("Укажите @ в своей почте!", {
                position: "top-center"
            });
        } else if (password === "") {
            toast.error("Ввведите пароль!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("Пароль должен быть больше 6 символов!", {
                position: "top-center"
            });
        } else if (cpassword === "") {
            toast.error("Ввведите пароль!", {
                position: "top-center"
            });
        }
        else if (cpassword.length < 6) {
            toast.error("Пароль должен быть больше 6 символов!", {
                position: "top-center"
            });
        } else if (password !== cpassword) {
            toast.error("Пароли не совпадают!", {
                position: "top-center"
            });
        } else {
            <NavLink to='/' />

            const data = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname, email, password, cpassword
                })
            });

            const res = await data.json();
            console.log(res.status);

            if (res.status === 201) {
                toast.success("Регистрация прошла успешно 😃!", {
                    position: "top-center"
                });
                setInpval({ ...inpval, fname: "", email: "", password: "", cpassword: "" });
            }
        }
    }

    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Зарегистрироватся</h1>
                        <p style={{ textAlign: "left" }}>Создайте новый аккаунт</p>
                    </div>

                    <form>
                        <div className="form_input">
                            <label htmlFor="fname">Имя</label>
                            <input type="text" onChange={setVal} value={inpval.fname} name="fname" id="fname" placeholder='Введите ваше имя' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="email">Почта</label>
                            <input type="email" onChange={setVal} value={inpval.email} name="email" id="email" placeholder='Введите вашу почту' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Пароль</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} value={inpval.password} onChange={setVal} name="password" id="password" placeholder='Придумайте пароль' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                                </div>
                            </div>
                        </div>

                        <div className="form_input">
                            <label htmlFor="password">Подтвердите пароль</label>
                            <div className="two">
                                <input type={!cpassShow ? "password" : "text"} value={inpval.cpassword} onChange={setVal} name="cpassword" id="cpassword" placeholder='Подтвердите пароль' />
                                <div className="showpass" onClick={() => setCPassShow(!cpassShow)}>
                                    {!cpassShow ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                                </div>
                            </div>
                        </div>

                        <button className='btn' onClick={addUserdata}> Зарегистриоваться</button>
                        <p>Уже есть аккаунт? <NavLink to="/login">Войти</NavLink></p>
                    </form>
                    <ToastContainer />
                </div>
            </section>
        </>
    )
}

export default Register
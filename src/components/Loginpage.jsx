import React, { useState } from 'react'
import { NavLink ,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./mix.css";
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const Loginpage = () => {

    const [passShow, setPassShow] = useState(false);

    const [inpval, setInpval] = useState({
        email: "",
        password: "", 
    });

    const history = useNavigate();

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


    const loginuser = async(e) => {
        e.preventDefault();

        const { email, password } = inpval;

        if (email === "") {
            toast.error("Укажите почту!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("Укажите @ в своей почте!", {
                position: "top-center"
            });
        } else if (password === "") {
            toast.error("Введите пароль!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("Пароль должен быть больше 6 символов!", {
                position: "top-center"
            });
        } else {
            console.log("user login succesfully done");


            const data = await fetch("/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                     email, password
                })
            });

            const res = await data.json();
            //  console.log(res);

            if(res.status === 201){
                localStorage.setItem("usersdatatoken",res.result.token);
                history("/dash")
                setInpval({...inpval,email:"",password:""});
            }else{
                toast.error("Invalid Credentials", {
                    position: "top-center"
                });
            }
        }
    }

    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Тазалык</h1>
                        <p>Пожалуйста введите свои данные для входа</p>
                    </div>

                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Почта</label>
                            <input type="email" value={inpval.email} onChange={setVal} name="email" id="email" placeholder='Введите свою почту' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Пароль</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} onChange={setVal} value={inpval.password} name="password" id="password" placeholder='Введите пароль' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon /> }
                                </div>
                            </div>
                        </div>
                        <p className='frgpass' style={{color:"black",fontWeight:"bold"}}><NavLink to="/password-reset">Забыли пароль?</NavLink> </p>
                        <button className='btn' onClick={loginuser}>Войти</button>
                        <p className='p'>Нет аккаунта? <NavLink to="/register">Зарегистриоваться</NavLink></p>        
                    </form>
                    <ToastContainer />
                </div>
            </section>
        </>
    )
}

export default Loginpage
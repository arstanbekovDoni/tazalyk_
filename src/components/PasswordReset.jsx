import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const PasswordReset = () => {

    const [email, setEmail] = useState("");

    const [message, setMessage] = useState("");

    const setVal = (e) => {
        setEmail(e.target.value)
    }

    const sendLink = async (e) => {
        e.preventDefault();

        if (email === "") {
            toast.error("Введите почту!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center"
            });
        } else {
            const res = await fetch("/sendpasswordlink", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });

            const data = await res.json();

            if (data.status == 201) {
                setEmail("");
                setMessage(true)
            } else {
                toast.error("Invalid User",{
                    position: "top-center"
                })
            }
        }
    }

    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Введите вашу почту</h1>
                    </div>

                    {message ? <p style={{ color: "green", fontWeight: "bold" }}>Уведомление отправлено вам на почту</p> : ""}
                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Почта</label>
                            <input type="email" value={email} onChange={setVal} name="email" id="email" placeholder='Введите вашу почту' />
                        </div>

                        <button className='btn' onClick={sendLink}>Отправить</button>
                    </form>
                    <ToastContainer />
                </div>
            </section>
        </>
    )
}

export default PasswordReset
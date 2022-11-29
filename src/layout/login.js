import style from "./login.module.css"
import {Link} from "react-router-dom"

import {AiOutlineMail} from 'react-icons/ai'
import {GiPadlock} from 'react-icons/gi'


export default function Login() {

    return (
        <section className={style.section}>
            <div className={style.container}>
                <h1 className={style.title}>Login</h1>
                <div className={style.form}>
                    <label><AiOutlineMail/> Seu e-mail</label>
                    <input type='email' placeholder="example@gmail.com"></input>
                </div>
                <div className={style.form}>
                    <label><GiPadlock/> Sua senha</label>
                    <input type='password'></input>
                </div>
                <label className={style.checkbox}>
                    <input type="checkbox" />
                    <b>Manter-me logado</b>
                </label>
                <div className={style.form}>
                    <button>Logar</button>
                </div>
                <div className={style.rodape}>
                    <p>Ainda não tem conta ?</p>
                    <Link to="/Cadastro">Cadastre-se</Link>
                </div>
            </div>

        </section>
    )
}
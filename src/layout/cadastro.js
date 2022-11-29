import style from './login.module.css'
import {Link} from 'react-router-dom'

import {BsArrow90DegLeft} from 'react-icons/bs'
import {AiOutlineUserSwitch} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {GiPadlock} from 'react-icons/gi'


export default function Cadatro() {

    return (
        
        <section className={style.section}>
            <Link to="/"><BsArrow90DegLeft className={style.arrow}/></Link>
            <div className={style.container}>
                <h1 className={style.title}>Cadastro</h1>
                <div className={style.form}>
                    <label><AiOutlineUserSwitch/> Nome completo</label>
                    <input type='text'></input>
                </div>
                <div className={style.form}>
                    <label><AiOutlineMail/> Seu e-mail</label>
                    <input type='email' placeholder="example@gmail.com"></input>
                </div>
                <div className={style.form}>
                    <label><GiPadlock/> Senha</label>
                    <input type='password'></input>
                </div>
                <div className={style.form}>
                    <label><GiPadlock className={style.password}/> Confirmar Senha</label>
                    <input type='password'></input>
                </div>
                <label className={style.checkbox}>
                    <input type="checkbox" />
                    <b>Manter-me logado</b>
                </label>
                <div className={style.form}>
                    <button>Cadastrar</button>
                </div>
            </div>

        </section>
    )
}
function FirstComponent() {

    let name = "Gian"
    const url = 'https://i.stack.imgur.com/Bzcs0.png'

    return (       
        <div>
            <p>Cheguei chegando</p>
            <p className = "cor">COLORE ISSO AQUI</p>
            4 + 5
            <p>Olá, {name}</p>
            <img src={url} alt={'photo'}/>
        </div>
    )
}

export default FirstComponent
import './Rodape.css'

const Rodape = ({ github, linkedin, instagram }) => {
    return (
        <footer className='rodape'>
            <div className='icones'>
                <a href={github}><img src='../imagens/fb.png' alt='GitHub' /></a>
                <a href={linkedin}><img src='../imagens/tw.png' alt='Linkedin' /></a>
                <a href={instagram}><img src='../imagens/ig.png' alt='Instagram' /></a>
            </div>
            <div className='logo'>
                <img src='../imagens/logo.png' alt='Logo' />
            </div>
            <div className='desenvolvedor'>
                <h3>Desenvolvido por Alura.</h3>
            </div>
        </footer>
    )
}

export default Rodape;
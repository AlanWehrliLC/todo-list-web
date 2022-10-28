import logoImg from "../../assets/Logo.svg"
import "./styles.scss"

export function Header(){
    return (
        <header id="headerContainer">
            <div>
                <img src={logoImg}/>
            </div>
        </header>
    )
}
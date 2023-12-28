import styled from "styled-components"
import theme from "../theme"
import { useState } from "react"
import Button from "../Button"


const MenuStyled = styled.menu`
   
  
    nav.active{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #F8F8F8;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    nav.active ul{
        margin-left: 0;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    nav.active ul li{
        margin-left: 0;
    }
    nav.active ul li a{
        display: inline-block;
        /* font-size: ; */
        margin: 5px 0;
    }
    #menuToggle{
        position: absolute;
        display: block;
        top: 50%;
        right: 2%;
        width: 30px;
        height: 30px;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        z-index: 1000000;
    }
    #menuToggle::before{
        position: absolute;
        content: '';
        width: 100%;
        height: 3px;
        background-color: black;
        transform: translateY(-10px);
        box-shadow: 0 10px 0 black;
    }
    #menuToggle::after{
        position: absolute;
        content: '';
        width: 100%;
        height: 3px;
        background-color: black;
        transform: translateY(10px);
    }

    #menuToggle.active::before{
       transform: translateY(0px) rotate(45deg);
       box-shadow:  0 0 0 black;
    }
    #menuToggle.active::after{
       transform: translateY(0px) rotate(-45deg);
    }
    #menuToggle {
        display: none;
    }
    button{
        display: none !important;
        margin-right: 10px;
    }
    @media (max-width: ${props => props.$theme.screen.lg}) {

        #menuToggle {
            display: block;
        }

        nav{
            display: none;
        }
        button{
            display:  block !important;
        }
    }
`
const ListStyled = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    display: flex;
    width: 100%;
    align-items: flex-start;
    gap: 100px;
    padding: 28px 0;


    li{
        a{
            font-family: Montserrat;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 120%; /* 24px */
            color: var(--Gray-Scale-gray-800, #242424);  
            text-decoration: none;
        }
        
    }
 
`
const Menu = () => {
    const [open, setOpen] = useState(false);
    
    const handleMenu = () => {
        setOpen(!open)
    }
    const closeMenu = () => {
        setOpen(false)
    }
    return (
        <MenuStyled $theme={theme}>
                <div      onClick={handleMenu} 
                id="menuToggle"
                className={open?'active': ''}
                ></div>
           
            <nav  
            className={open?'active': ''}
            >
                <ListStyled >
                    <li>
                        <a onClick={closeMenu}  href="#ferramentas">Ferramentas</a>
                    </li>
                    <li>
                        <a onClick={closeMenu}  href="#pra_que">Pra que?</a>
                    </li>
                    <li>
                        <a onClick={closeMenu} href="#contato">Contato</a>
                    </li>
                </ListStyled>
                <Button id="small__screen_btn">
                    Testar agora
                </Button>
            </nav>
        </MenuStyled>
    )
}
export default Menu
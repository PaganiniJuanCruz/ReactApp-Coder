import styled from 'styled-components'

const NavBar = () => {
    return (
        <>
            <NavContainer>
                <h2></h2>
                <div>
                    <a href='/'>Home</a>
                    <a href='/'>Cart</a>
                    <a href='/'>About</a>
                    <a href='/'>Contact</a>
                </div>
            </NavContainer>  
        </>
    )
}

export default NavBar;

const NavContainer = styled.nav`    
    padding: 0.4rem;
    background-color: salmon;
    display: flex;
    justify-content: center;
    align-items: center;

    a{
        color: black;
        text-decoration: none;
        margin-right: 5rem;
        font-family: 'Times New Roman', Times, serif;
        font-size: 1.2rem;
    }

`
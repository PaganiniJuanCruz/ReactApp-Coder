import styled from 'styled-components'
import { FaDribbble } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
            <NavbarContainer>
                <Wrapper>
                    <LogoContainer>
                        <FaDribbble>
                        </FaDribbble>
                        <p>Iverson Basketball Clothes</p>
                    </LogoContainer>

                    <Menu>
                        <MenuItem>
                            <MenuItemLink>Home</MenuItemLink>
                        </MenuItem>

                        <MenuItem>
                            <MenuItemLink>T-Shirts</MenuItemLink>
                        </MenuItem>

                        <MenuItem>
                            <MenuItemLink>Sneakers</MenuItemLink>
                        </MenuItem>

                        <MenuItem>
                            <MenuItemLink>Contact Us</MenuItemLink>
                        </MenuItem>
                    </Menu>
                </Wrapper>
            </NavbarContainer>
        </>
    )
}

export default Navbar;

const NavbarContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: salmon;
`

const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
`
const LogoContainer = styled.div`
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    height: 120%;
`

const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
`

const MenuItem = styled.li`
    height: 100%;
`

const MenuItemLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 2.5rem;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 1rem;
    font-weight: 300;
    cursor: pointer;
    transition: 0.5s all ease;
    height: 40%;

    &:hover{
        color: black;
        background-color: antiquewhite;
        transition: 0.5s all ease;
    }
`
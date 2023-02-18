import styled from 'styled-components'

export const NavContainer = styled.nav`
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  padding-left: 40px;
  padding-right: 40px;
`
export const PopupContainer = styled.div`
  background-color: #ffffff;
  height: 100px;
  padding: 10px;
  border-radius: 10px;
`
export const CustomLogo = styled.img`
  height: 25px;
`
export const NavMenu = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
`
export const NavLinkLargeContainer = styled.li`
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavLink = styled.li`
  margin-left: 20px;
  @media screen and (min-width: 767px) {
    display: none;
  }
`
export const CustomButton = styled.button`
  background-color: transparent;
  border-color: #3b82f6;
  color: #3b82f6;
  padding: 5px;
  border-radius: 5px;
  outline: none;
  font-size: 12px;
  margin-right: 10px;
`
export const CustomImage = styled.img`
  height: 22px;
`

import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap'

// export default props => {
//   return (
//     <div className='flex h-16 bg-purple-600'>
//       <div className='flex px-4 flex-1 items-center'>
//         <img className='h-12' src={Logo} alt='logo' />
//         <h1 className='text-2xl font-semibold text-white'>NYC</h1>
//       </div>
//       <div className='flex-1 bg-purple-400'></div>
//     </div>
//   )
// }

export default props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>Moodsfoods</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink href='/components/'>Profile</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Marketplace
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavLink href='/components/'>contact</NavLink>
        </Collapse>
      </Navbar>
    </div>
  )
}

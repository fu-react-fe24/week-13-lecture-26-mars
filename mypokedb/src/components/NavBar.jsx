import NavItem from './NavItem';

function NavBar() {
  const navItems = [
    'Pokedex',
    'Team Generator',
    'Search Pokemon'
  ];

  return (
    <ul className="nav">
      {
        navItems.map((item, index) => {
          return <NavItem 
            key={index}
            text={item}
          />
        })
      }
    </ul>
  )
}

export default NavBar;

const initialState = 0;

const NavbarHeight = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setNavbarHeight': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default NavbarHeight;

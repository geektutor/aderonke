import Root from "./components"

const rukky = {
  name: "rukky",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      Navbar: false
    }
  },
  actions: {
    theme: {
      toggleNav: ({ state }) => {
        state.theme.Navbar = !state.theme.Navbar
      }
    }
  },
}

export default rukky

import Root from "./components"

const rukky = {
  name: "rukky",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      Navbar: false,
      showBlog: false,
    }
  },
  actions: {
    theme: {
      toggleNav: ({ state }) => {
        state.theme.Navbar = !state.theme.Navbar
      },
      toggleBlog: ({ state }) => {
        state.theme.showBlog = !state.theme.showBlog,
        window.scrollTo(0, 0)
      }
    }
  },
}

export default rukky

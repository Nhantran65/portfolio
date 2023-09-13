import Home from "@/pages/Home"
import About from "@/pages/About"

// Public routes 

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/about', component: About},

]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}
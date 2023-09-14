import Home from "@/pages/Home"
import About from "@/pages/About"
import Experience from "@/pages/Experience"
import Education from "@/pages/Education"
import Skill from "@/pages/Skill"
import Blog from "@/pages/Blog"
import Contact from "@/pages/Contact"

// Public routes 

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/education', component: Education},
    {path: '/experience', component: Experience},
    {path: '/skill', component: Skill},
    {path: '/blog', component: Blog},
    {path: '/contact', component: Contact},
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}
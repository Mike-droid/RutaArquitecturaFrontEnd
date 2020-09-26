import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

const routes = { //!Estructura
    '/':Home,
    '/:id':Character, //! ":id" está escrito así porque es un valor dinámico
    '/contact':'Contact',
}

const router = async () => {
    const header = null || document.getElementById('header')
    const content = null || document.getElementById('content')
    //! esas costantes son del archivo index.html dentro de la carpeta public

    header.innerHTML = await Header()
    let hash = getHash()
    let route = await resolveRoutes(hash)
    let render = routes[route] ? routes[route] : Error404
    content.innerHTML = await render()
}

export default router
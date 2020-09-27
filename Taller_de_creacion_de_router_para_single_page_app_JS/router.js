class Router {
    constructor(routes){ //*toma como argumento el array de las rutas
        this.routes = routes
        this._loadInitialRoute()
    }

    loadRoute(...urlSegs){ //* la función que hace el cambio de páginas
        const matchedRoute = this._mathUrlToRoute(urlSegs)

        const url = `/${urlSegs.join('/')}`
        history.pushState({}, 'this works', url)

        const routerOutElm = document.querySelectorAll('[data-router]')[0]
        routerOutElm.innerHTML = matchedRoute.template
    }

    _mathUrlToRoute(urlSegs){ //* la función que hace la magia
        const matchedRoute = this.routes.find(route => {

            const routePathSegs = route.path.split('/').slice(1) //*Información que está después del '/'

            if (routePathSegs.length !== urlSegs.length) { //*No hay match del url
                return false
            }

            return routePathSegs
                .every((routePathSeg, i) => routePathSeg === urlSegs[i])
        })

        return matchedRoute
    }

    _loadInitialRoute() { //* función inicial
        const pathNameSplit = window.location.pathname.split('/')
        const pathSegs = pathNameSplit.length > 1 ? pathNameSplit.slice(1) : ''

        this.loadRoute(...pathSegs) //* ... hacen referencia a split syntax
        //! Nosotros vamos a tener nuestra ruta inicial
    }
}
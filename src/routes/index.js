import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Pagina1 from './Pagina1'
import Pagina2 from './Pagina2'
import Pagina3 from './Pagina3'

export default function Routes(){
    return (
        <><h1>Megamix - Routes</h1>
            <header>
                <Link to='/'>Home</Link>
                <br/>
                <Link to='/pag1'>Página 1</Link>
                <br/>
                <Link to='/pag2'>Página 2</Link>
                <br/>
                <Link to='/pag3'>Página 3</Link>
            </header>
            <main>
                <Switch>
                    <Route path='/pag1' component={Pagina1} />
                    <Route path='/pag2' component={Pagina2} />
                    <Route path='/pag3' component={Pagina3} />
                </Switch>
            </main>
        </>
    )
}
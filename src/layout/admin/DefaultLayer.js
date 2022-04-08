import React from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router, Redirect , Route, Switch} from 'react-router-dom';
import Sidebar from '../Sidebar'
import Header from './Header'
import Footer from './Footer'
import routes from '../../routes'

const Side = styled.div`
  z-index: 100;
`
const DefaultLayout = () => {
  return (
    <div>
      <Side><Sidebar /></Side> 
      <div >
        <Header />
        <Switch>
          {routes.map((route, idx)=> {
            return(
              route.component && (
                <Route 
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props)=> (<route.component {...props} /> )}
                />
              )
            )
            })
          }
          <Redirect  to="/admin/dashboard"/>
        </Switch>
        <Footer />
      </div>
    </div>
  )
}

export default DefaultLayout

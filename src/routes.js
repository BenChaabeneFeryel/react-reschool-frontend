import Dashboard from './pages/admin/Dashboard'
import Poubelles from './pages/admin/Poubelles'
import Map from './pages/admin/Map'
import Camions from './pages/admin/Camions'
import Ouvriers from './pages/admin/Ouvriers'
import Reparateurs from './pages/admin/Reparateurs'
import Responsables from './pages/admin/Responsables'
import AcheteursDechets from './pages/admin/AcheteursDechets'
import Fournisseurs from './pages/admin/Fournisseurs'
import CommandesPoubelles from './pages/admin/CommandesPoubelles'
import CommandesDechets from './pages/admin/CommandesDechets'
import Accueil from './pages/internaute/Accueil'
import Login from './pages/internaute/Login'

const routes = [
  { path: '/', exact: true, name: 'Accueil', element: Accueil },
  { path: '/login', name: 'Login', element: Login },

  // { path: '/admin', name: 'Login', element: Login },
  { path: '/admin/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/admin/map', name: 'Map', element: Map },
  { path: '/admin/poubelles', name: 'Poubelles', element: Poubelles },
  { path: '/admin/camions', name: 'Camions', element: Camions },
  { path: '/admin/ouvriers', name: 'Ouvriers', element: Ouvriers },
  { path: '/admin/reparateurs', name: 'Reparateurs', element: Reparateurs },
  { path: '/admin/responsables-etablissements', name: 'Responsables', element: Responsables },
  { path: '/admin/acheteurs-dechets', name: 'Acheteurs', element: AcheteursDechets },
  { path: '/admin/fournisseurs', name: 'Fournisseurs', element: Fournisseurs },
  { path: '/admin/commandes-poubelles', name: 'CommandesPoubelles', element: CommandesPoubelles },
  { path: '/admin/commandes-dechets', name: 'CommandesDechets', element: CommandesDechets },
  // Responsable etablissement
//   { path: '/mon-dashboard', name: 'DashboardRes', element: DashboardRes },
]

export default routes

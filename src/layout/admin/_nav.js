import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import DeleteIcon from '@mui/icons-material/Delete';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import RoomIcon from '@mui/icons-material/Room';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonIcon from '@mui/icons-material/Person';
import BuildIcon from '@mui/icons-material/Build';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { FaLock, FaMoneyBill, FaUser } from "react-icons/fa";

const _nav = [
  {
    path: "/admin/dashboard",
    name: "Dashboard",
    icon: <DashboardIcon />,
  }, 
  {
    name: 'Map',
    path: '/map',
    icon: <RoomIcon/>,
  },
  {
    name: 'Poubelles',
    path: '/poubelles',
    icon: <DeleteIcon/>,
    subRoutes: [
      {
        path: "/responsable-etablissement/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/responsable-etablissement/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/responsable-etablissement/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    name: 'Camions',
    path: '/camions',
    icon: <LocalShippingIcon />,
  },
  {
    name: 'Ouvriers',
    path: '/ouvriers',
    icon: <PersonIcon />,
  },
  {
    name: 'Réparateurs',
    path: '/reparateurs',
    icon: <BuildIcon />,
  },
  {
    name: 'Responsables des établissements',
    path: '/responsables-etablissements',
    icon: <MapsHomeWorkIcon />,
  },
  {
    name: 'Acheteurs de déchets',
    path: '/acheteurs-dechets',
    icon: <MapsHomeWorkIcon />,
  },
  {
    name: 'Fournisseurs',
    path: '/fournisseurs',
    icon: <MapsHomeWorkIcon />,
  },
  {
    name: 'Commandes Poubelles',
    path: '/commandes-poubelles',
    icon: <LocalMallIcon/>,
  },
  {
    name: 'Commandes Déchets',
    path: '/commandes-dechets',
    icon: <LocalMallIcon />,
  },
]

export default _nav

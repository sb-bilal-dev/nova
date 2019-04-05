
import { PROJ_TYPES } from '../containers/Home/constants'

if (!localStorage.getItem('dndPositions')) {
  const dndPositions = {}

  PROJ_TYPES.forEach(type => {
    dndPositions[type.value] = []
  })

  localStorage.setItem('dndPositions', JSON.stringify(dndPositions))
}

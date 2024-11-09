const SKINS_MOCK = [
  { name: 'Basic', owned: true, price: 0 },
  { name: 'Galaxy', owned: false, price: 100000 },
  { name: 'Matrix', owned: false, price: 200000 },
]

const AVATAR_COLORS = [
  '#2FBCC5',
  '#4063FF',
  '#46CC73',
  '#DF5858',
  '#971BD1',
  '#DF58B9',
  '#D89632',
]

const SKINS_TEXTURES = {
  LOL: '/hexagon_galaxy.png',
  Rekt: '/hexagon_rekt.png',
}

const DEFAULT_SKIN = {
  id: 'default',
  name: 'Default',
  required_xp: 0,
  open_from: 0,
  price_ton: 0,
  owned: true,
}

const DEFAULT_SKIN_UUID = '0'

export {
  SKINS_MOCK,
  AVATAR_COLORS,
  SKINS_TEXTURES,
  DEFAULT_SKIN,
  DEFAULT_SKIN_UUID,
}

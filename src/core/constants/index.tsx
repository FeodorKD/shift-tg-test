const API_ROUTES = {
  initUser: 'users',
  skins: 'skins',
  skinPurchaseXP: 'skins/purchase',
  setActiveSkin: (skinId: string) => `skins/${skinId}/set-active`,
  claimReward: (userId: string) => `users/${userId}/claim`,
  claimGameBot: (userId: string) => `gamebot/${userId}/claim`,
  dropGameBot: (userId: string) => `gamebot/${userId}/drop`,
  upgradeUserLevel: (userId: string) => `users/${userId}/upgrade-level`,
  quests: 'quests',
  completeSubtask: (subtask_id: string) => `subtasks/${subtask_id}/complete`,
  claimSubtask: (subtask_id: string) => `subtasks/${subtask_id}/claim-reward`,
  claimQuest: (quest_id: string) => `quests/${quest_id}/claim-reward`,
}

const APP_LINK = 't.me/TestMyAppSHiftAABot/shift_fe?startapp'

const MANIFEST_TON =
  'https://salmon-many-reindeer-256.mypinata.cloud/ipfs/QmZQYzqT2AFSVTQ43kPzD5BDkTgTR7uWwhGzuQY9x6wwLq'

const MAX_INVITES_LIMIT = 150

export { API_ROUTES, APP_LINK, MANIFEST_TON, MAX_INVITES_LIMIT }

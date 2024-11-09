import { create } from 'zustand'
import { UserSessionDataType } from '@/types/user'
import { Skin } from '@/types/skins'
import { LevelType } from '@/types'
import { Quest, Subtask } from '@/types/quests'

interface AppState {
  user: UserSessionDataType | null
  updateScore: (score: number) => void
  dropReward: () => void
  setUser: (user: UserSessionDataType) => void
  upgradeLevel: (
    payload: LevelType & {
      upgrade_available: boolean
      xp_to_upgrade: number
      points_to_next_level: number
    }
  ) => void

  gameBotOpened: boolean
  claimGamebotScore: (score: number) => void
  dropGamebotScore: () => void
  changeGamebotState: (arg: boolean) => void

  skins: Skin[]
  setSkins: (skins: Skin[]) => void
  ownNewSkin: (skinId: string) => void
  selectSkin: (skinId: string) => void
  dropDaysReward: () => void
  dropDaysRow: () => void

  quests: Quest[]
  selectedQuest: Quest | null
  setQuestsList: (quests: Quest[]) => void
  setSelectedQuest: (quests: Quest | null) => void
  markSubtaskAsCompleted: (
    sub: Subtask & {
      completed_subtasks: number
      total_subtasks: number
    }
  ) => void
  markSubtaskAsClaimed: (
    sub: Subtask & {
      completed_subtasks: number
      total_subtasks: number
    }
  ) => void
  markQuestAsClaimed: (quest: Quest) => void
}

const useStore = create<AppState>((set) => ({
  user: null,
  skins: [],
  quests: [],
  selectedQuest: null,
  gameBotOpened: false,
  setUser: (user: UserSessionDataType) => set((state) => ({ ...state, user })),
  dropReward: () =>
    // @ts-ignore
    set((state) => ({ ...state, user: { ...state.user, reward: 0 } })),
  dropGamebotScore: () =>
    // @ts-ignore
    set((state) => ({
      ...state,
      user: { ...state.user, gamebot_reward: 0 },
      gameBotOpened: false,
    })),
  claimGamebotScore: (score: number) =>
    // @ts-ignore
    set((state) => ({
      ...state,
      user: { ...state.user, gamebot_reward: 0, score },
      gameBotOpened: false,
    })),
  updateScore: (score: number) =>
    // @ts-ignore
    set((state) => ({ ...state, user: { ...state.user, score } })),
  changeGamebotState: (open: boolean) =>
    set((state) => ({ ...state, gameBotOpened: open })),
  ownNewSkin: (skinId: string) =>
    // @ts-ignore
    set((state) => {
      const stateSkins = state.skins
      const reqIdx = stateSkins.findIndex((x) => x.id === skinId)
      stateSkins[reqIdx] = { ...stateSkins[reqIdx], owned: true }
      return { ...state, skins: stateSkins }
    }),
  setSkins: (skins: Skin[]) => set((state) => ({ ...state, skins })),
  selectSkin: (skinId: string) =>
    // @ts-ignore
    set((state) => ({
      ...state,
      user: { ...state.user, active_skin_id: skinId },
    })),
  upgradeLevel: (status) =>
    // @ts-ignore
    set((state) => ({ ...state, user: { ...state.user, status } })),
  dropDaysReward: () =>
    // @ts-ignore
    set((state) => ({
      ...state,
      user: { ...state.user, drop_reward: null },
    })),
  dropDaysRow: () =>
    // @ts-ignore
    set((state) => ({
      ...state,
      user: { ...state.user, is_days_shown: true },
    })),
  // @ts-ignore
  setQuestsList: (quests: Quest[]) => set((state) => ({ ...state, quests })),
  setSelectedQuest: (quest: Quest | null) =>
    set((state) => ({ ...state, selectedQuest: quest })),
  markSubtaskAsCompleted: (sub) =>
    // @ts-ignore
    set((state) => {
      const parentQuest = state.quests.find(
        (q) => q.subtasks.findIndex((s) => s.id === sub.id) != -1
      )

      if (!parentQuest) return

      const parentQuestIdx = state.quests.findIndex(
        (q) => q.subtasks.findIndex((s) => s.id === sub.id) != -1
      )

      const subtasks = parentQuest.subtasks
      const subIdx = parentQuest.subtasks.findIndex((s) => s.id === sub.id)
      subtasks[subIdx] = { ...subtasks[subIdx], completed: sub.completed }

      const updatedQuest = {
        ...parentQuest,
        completed_subtasks: sub.completed_subtasks,
        total_subtasks: sub.total_subtasks,
      }

      const quests = state.quests
      quests[parentQuestIdx] = updatedQuest as Quest

      return { ...state, selectedQuest: updatedQuest, quests }
    }),
  markSubtaskAsClaimed: (sub) =>
    // @ts-ignore
    set((state) => {
      const parentQuest = state.quests.find(
        (q) => q.subtasks.findIndex((s) => s.id === sub.id) != -1
      )

      if (!parentQuest) return

      const parentQuestIdx = state.quests.findIndex(
        (q) => q.subtasks.findIndex((s) => s.id === sub.id) != -1
      )

      const subtasks = parentQuest.subtasks
      const subIdx = parentQuest.subtasks.findIndex((s) => s.id === sub.id)
      subtasks[subIdx] = {
        ...subtasks[subIdx],
        reward_claimed: sub.reward_claimed,
      }

      const updatedQuest = {
        ...parentQuest,
        subtasks,
        completed_subtasks: sub.completed_subtasks,
        total_subtasks: sub.total_subtasks,
      }

      const quests = state.quests
      quests[parentQuestIdx] = updatedQuest as Quest

      return { ...state, selectedQuest: updatedQuest, quests }
    }),
  markQuestAsClaimed: (quest) =>
    // @ts-ignore
    set((state) => {
      const questToUpdate = state.quests.find((q) => q.id === quest.id)
      if (!questToUpdate) return
      const questIdx = state.quests.findIndex((q) => q.id === quest.id)

      const quests = state.quests
      const updatedQuest = {
        ...questToUpdate,
        completed: true,
        reward_claimed: true,
      }

      quests[questIdx] = updatedQuest as Quest

      return state
    }),
}))

export default useStore

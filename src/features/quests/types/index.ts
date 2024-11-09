type Quest = {
  id: string
  name: string
  description: string
  reward: number
  completed: boolean
  reward_claimed: boolean
  valid_by: Date
  total_subtasks: number
  completed_subtasks: number
  subtasks: Subtask[]
}

type Subtask = {
  completed: boolean
  description: string
  id: string
  link: string
  name: string
  reward: number
  reward_claimed: boolean
}

export type { Quest, Subtask }

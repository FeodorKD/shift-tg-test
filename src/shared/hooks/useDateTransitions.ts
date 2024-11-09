import { addDays, format, fromUnixTime, subDays } from 'date-fns'

type UseDateTransitionsProps = { dateUnix: number }

const useDateTransitions = ({ dateUnix }: UseDateTransitionsProps) => {
  const date = fromUnixTime(dateUnix)
  const currentDay = format(date, 'EEE')
  const dayNumber = format(date, 'd')
  const previousDay = format(subDays(date, 1), 'EEE')
  const nextDay = format(addDays(date, 1), 'EEE')

  return {
    dateUnix,
    dayNumber,
    currentDay,
    previousDay,
    nextDay,
  }
}

export default useDateTransitions

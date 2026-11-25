// Whom a request a bot's turn sends acts for, as Orca records it on the request for the bot it asks.
import { distinctAskers, type BotRequestAsker } from '../../shared/bots/bot-acts-for'
import type { BotActingTurn } from './bot-request-asker'

/** The turn's askers, and someone Orca can't name when a paired device it can't place as the owner
 *  typed in the turn, so the receiving bot never reads the request as the owner's. */
export function requestAskersOf(
  turn: Pick<BotActingTurn, 'askers' | 'typedByAnother'>
): BotRequestAsker[] {
  return turn.typedByAnother === true
    ? distinctAskers([...turn.askers, { kind: 'unknown' }])
    : turn.askers
}

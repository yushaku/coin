import { Transfer as TransferEvent } from "../generated/transaction/transaction"
import { Transfer } from "../generated/schema"

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._from = event.params._from
  entity._receiver = event.params._receiver
  entity._amount = event.params._amount
  entity._message = event.params._message
  entity._timestamp = event.params._timestamp
  entity.keyword = event.params.keyword

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

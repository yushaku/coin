import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { Transfer } from "../generated/transaction/transaction"

export function createTransferEvent(
  _from: Address,
  _receiver: Address,
  _amount: BigInt,
  _message: string,
  _timestamp: BigInt,
  keyword: string
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("_receiver", ethereum.Value.fromAddress(_receiver))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("_message", ethereum.Value.fromString(_message))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "_timestamp",
      ethereum.Value.fromUnsignedBigInt(_timestamp)
    )
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("keyword", ethereum.Value.fromString(keyword))
  )

  return transferEvent
}

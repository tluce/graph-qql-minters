import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  ApprovalForAllSeeds,
  OwnershipTransferred,
  ProjectRoyaltyRecipientChange,
  SeedTransfer,
  TokenRoyaltyRecipientChange,
  Transfer
} from "../generated/QQL/QQL"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createApprovalForAllSeedsEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAllSeeds {
  let approvalForAllSeedsEvent = changetype<ApprovalForAllSeeds>(newMockEvent())

  approvalForAllSeedsEvent.parameters = new Array()

  approvalForAllSeedsEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllSeedsEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllSeedsEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllSeedsEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createProjectRoyaltyRecipientChangeEvent(
  newRecipient: Address
): ProjectRoyaltyRecipientChange {
  let projectRoyaltyRecipientChangeEvent = changetype<
    ProjectRoyaltyRecipientChange
  >(newMockEvent())

  projectRoyaltyRecipientChangeEvent.parameters = new Array()

  projectRoyaltyRecipientChangeEvent.parameters.push(
    new ethereum.EventParam(
      "newRecipient",
      ethereum.Value.fromAddress(newRecipient)
    )
  )

  return projectRoyaltyRecipientChangeEvent
}

export function createSeedTransferEvent(
  from: Address,
  to: Address,
  seed: Bytes
): SeedTransfer {
  let seedTransferEvent = changetype<SeedTransfer>(newMockEvent())

  seedTransferEvent.parameters = new Array()

  seedTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  seedTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  seedTransferEvent.parameters.push(
    new ethereum.EventParam("seed", ethereum.Value.fromFixedBytes(seed))
  )

  return seedTransferEvent
}

export function createTokenRoyaltyRecipientChangeEvent(
  tokenId: BigInt,
  newRecipient: Address
): TokenRoyaltyRecipientChange {
  let tokenRoyaltyRecipientChangeEvent = changetype<
    TokenRoyaltyRecipientChange
  >(newMockEvent())

  tokenRoyaltyRecipientChangeEvent.parameters = new Array()

  tokenRoyaltyRecipientChangeEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  tokenRoyaltyRecipientChangeEvent.parameters.push(
    new ethereum.EventParam(
      "newRecipient",
      ethereum.Value.fromAddress(newRecipient)
    )
  )

  return tokenRoyaltyRecipientChangeEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

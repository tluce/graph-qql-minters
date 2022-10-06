import { BigInt, Address } from "@graphprotocol/graph-ts";
import { Transfer } from "../generated/QQL/QQL";
import { CONTRACT_ADDRESS } from "../constants";
import { MintedItem } from "../generated/schema";

export function handleTransfer(event: Transfer): void {
  // we only want to index transfer events triggered by a mint
  // i.e. where the 'from' address is zero
  if (Address.zero().equals(event.params.from)) {
    let mintedItem = MintedItem.load(getIdFromEventParams(event.params.tokenId));
    if (!mintedItem) {
      mintedItem = new MintedItem(getIdFromEventParams(event.params.tokenId));
    }
    mintedItem.minterAddress = event.params.to;
    mintedItem.tokenId = event.params.tokenId;
    mintedItem.save();
  }
}

function getIdFromEventParams(tokenId: BigInt): string {
  return tokenId.toHexString() + CONTRACT_ADDRESS;
}

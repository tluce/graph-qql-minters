import { BigInt, Address } from "@graphprotocol/graph-ts";
import { Transfer } from "../generated/QQL/QQL";
import { CONTRACT_ADDRESS } from "../constants";
import { ItemMinted } from "../generated/schema";

export function handleTransfer(event: Transfer): void {
  // we only want to index transfer events triggered by a mint
  // i.e. where the 'from' address is zero
  if (Address.zero().equals(event.params.from)) {
    let itemMinted = ItemMinted.load(getIdFromEventParams(event.params.tokenId));
    if (!itemMinted) {
      itemMinted = new ItemMinted(getIdFromEventParams(event.params.tokenId));
    }
    itemMinted.minterAddress = event.params.to;
    itemMinted.tokenId = event.params.tokenId;
    itemMinted.save();
  }
}

function getIdFromEventParams(tokenId: BigInt): string {
  return tokenId.toHexString() + CONTRACT_ADDRESS;
}

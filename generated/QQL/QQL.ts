// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class ApprovalForAllSeeds extends ethereum.Event {
  get params(): ApprovalForAllSeeds__Params {
    return new ApprovalForAllSeeds__Params(this);
  }
}

export class ApprovalForAllSeeds__Params {
  _event: ApprovalForAllSeeds;

  constructor(event: ApprovalForAllSeeds) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ProjectRoyaltyRecipientChange extends ethereum.Event {
  get params(): ProjectRoyaltyRecipientChange__Params {
    return new ProjectRoyaltyRecipientChange__Params(this);
  }
}

export class ProjectRoyaltyRecipientChange__Params {
  _event: ProjectRoyaltyRecipientChange;

  constructor(event: ProjectRoyaltyRecipientChange) {
    this._event = event;
  }

  get newRecipient(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SeedTransfer extends ethereum.Event {
  get params(): SeedTransfer__Params {
    return new SeedTransfer__Params(this);
  }
}

export class SeedTransfer__Params {
  _event: SeedTransfer;

  constructor(event: SeedTransfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get seed(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class TokenRoyaltyRecipientChange extends ethereum.Event {
  get params(): TokenRoyaltyRecipientChange__Params {
    return new TokenRoyaltyRecipientChange__Params(this);
  }
}

export class TokenRoyaltyRecipientChange__Params {
  _event: TokenRoyaltyRecipientChange;

  constructor(event: TokenRoyaltyRecipientChange) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newRecipient(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class QQL__getRoyaltiesResult {
  value0: Array<Address>;
  value1: Array<BigInt>;

  constructor(value0: Array<Address>, value1: Array<BigInt>) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddressArray(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigIntArray(this.value1));
    return map;
  }

  getRecipients(): Array<Address> {
    return this.value0;
  }

  getBps(): Array<BigInt> {
    return this.value1;
  }
}

export class QQL extends ethereum.SmartContract {
  static bind(address: Address): QQL {
    return new QQL("QQL", address);
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRoyalties(tokenId: BigInt): QQL__getRoyaltiesResult {
    let result = super.call(
      "getRoyalties",
      "getRoyalties(uint256):(address[],uint256[])",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return new QQL__getRoyaltiesResult(
      result[0].toAddressArray(),
      result[1].toBigIntArray()
    );
  }

  try_getRoyalties(
    tokenId: BigInt
  ): ethereum.CallResult<QQL__getRoyaltiesResult> {
    let result = super.tryCall(
      "getRoyalties",
      "getRoyalties(uint256):(address[],uint256[])",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new QQL__getRoyaltiesResult(
        value[0].toAddressArray(),
        value[1].toBigIntArray()
      )
    );
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isApprovedForAllSeeds(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAllSeeds",
      "isApprovedForAllSeeds(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAllSeeds(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAllSeeds",
      "isApprovedForAllSeeds(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isApprovedOrOwnerForSeed(operator: Address, seed: Bytes): boolean {
    let result = super.call(
      "isApprovedOrOwnerForSeed",
      "isApprovedOrOwnerForSeed(address,bytes32):(bool)",
      [
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromFixedBytes(seed)
      ]
    );

    return result[0].toBoolean();
  }

  try_isApprovedOrOwnerForSeed(
    operator: Address,
    seed: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedOrOwnerForSeed",
      "isApprovedOrOwnerForSeed(address,bytes32):(bool)",
      [
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromFixedBytes(seed)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  maxPremintPassId(): BigInt {
    let result = super.call(
      "maxPremintPassId",
      "maxPremintPassId():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_maxPremintPassId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "maxPremintPassId",
      "maxPremintPassId():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  mint(mintPassId: BigInt, seed: Bytes): BigInt {
    let result = super.call("mint", "mint(uint256,bytes32):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(mintPassId),
      ethereum.Value.fromFixedBytes(seed)
    ]);

    return result[0].toBigInt();
  }

  try_mint(mintPassId: BigInt, seed: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall("mint", "mint(uint256,bytes32):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(mintPassId),
      ethereum.Value.fromFixedBytes(seed)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  mintTo(mintPassId: BigInt, seed: Bytes, recipient: Address): BigInt {
    let result = super.call(
      "mintTo",
      "mintTo(uint256,bytes32,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(mintPassId),
        ethereum.Value.fromFixedBytes(seed),
        ethereum.Value.fromAddress(recipient)
      ]
    );

    return result[0].toBigInt();
  }

  try_mintTo(
    mintPassId: BigInt,
    seed: Bytes,
    recipient: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "mintTo",
      "mintTo(uint256,bytes32,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(mintPassId),
        ethereum.Value.fromFixedBytes(seed),
        ethereum.Value.fromAddress(recipient)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  operatorFilter(): Address {
    let result = super.call("operatorFilter", "operatorFilter():(address)", []);

    return result[0].toAddress();
  }

  try_operatorFilter(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "operatorFilter",
      "operatorFilter():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOfSeed(seed: Bytes): Address {
    let result = super.call("ownerOfSeed", "ownerOfSeed(bytes32):(address)", [
      ethereum.Value.fromFixedBytes(seed)
    ]);

    return result[0].toAddress();
  }

  try_ownerOfSeed(seed: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "ownerOfSeed",
      "ownerOfSeed(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(seed)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  parametricArtist(tokenId: BigInt): Address {
    let result = super.call(
      "parametricArtist",
      "parametricArtist(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return result[0].toAddress();
  }

  try_parametricArtist(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "parametricArtist",
      "parametricArtist(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  projectRoyaltyRecipient(): Address {
    let result = super.call(
      "projectRoyaltyRecipient",
      "projectRoyaltyRecipient():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_projectRoyaltyRecipient(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "projectRoyaltyRecipient",
      "projectRoyaltyRecipient():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  scriptPiece(id: BigInt): string {
    let result = super.call("scriptPiece", "scriptPiece(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);

    return result[0].toString();
  }

  try_scriptPiece(id: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("scriptPiece", "scriptPiece(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  seedToTokenId(seed: Bytes): BigInt {
    let result = super.call(
      "seedToTokenId",
      "seedToTokenId(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(seed)]
    );

    return result[0].toBigInt();
  }

  try_seedToTokenId(seed: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "seedToTokenId",
      "seedToTokenId(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(seed)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenByIndex(index: BigInt): BigInt {
    let result = super.call("tokenByIndex", "tokenByIndex(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);

    return result[0].toBigInt();
  }

  try_tokenByIndex(index: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenByIndex",
      "tokenByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenOfOwnerByIndex(owner: Address, index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    owner: Address,
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenRoyaltyRecipient(tokenId: BigInt): Address {
    let result = super.call(
      "tokenRoyaltyRecipient",
      "tokenRoyaltyRecipient(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return result[0].toAddress();
  }

  try_tokenRoyaltyRecipient(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "tokenRoyaltyRecipient",
      "tokenRoyaltyRecipient(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokenSeed(tokenId: BigInt): Bytes {
    let result = super.call("tokenSeed", "tokenSeed(uint256):(bytes32)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toBytes();
  }

  try_tokenSeed(tokenId: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall("tokenSeed", "tokenSeed(uint256):(bytes32)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenUriDelegate(): Address {
    let result = super.call(
      "tokenUriDelegate",
      "tokenUriDelegate():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_tokenUriDelegate(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "tokenUriDelegate",
      "tokenUriDelegate():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  unlockTimestamp(): BigInt {
    let result = super.call(
      "unlockTimestamp",
      "unlockTimestamp():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_unlockTimestamp(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "unlockTimestamp",
      "unlockTimestamp():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get pass(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get maxPremintPassId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get unlockTimestamp(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class ApproveForAllSeedsCall extends ethereum.Call {
  get inputs(): ApproveForAllSeedsCall__Inputs {
    return new ApproveForAllSeedsCall__Inputs(this);
  }

  get outputs(): ApproveForAllSeedsCall__Outputs {
    return new ApproveForAllSeedsCall__Outputs(this);
  }
}

export class ApproveForAllSeedsCall__Inputs {
  _call: ApproveForAllSeedsCall;

  constructor(call: ApproveForAllSeedsCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class ApproveForAllSeedsCall__Outputs {
  _call: ApproveForAllSeedsCall;

  constructor(call: ApproveForAllSeedsCall) {
    this._call = call;
  }
}

export class ChangeTokenRoyaltyRecipientCall extends ethereum.Call {
  get inputs(): ChangeTokenRoyaltyRecipientCall__Inputs {
    return new ChangeTokenRoyaltyRecipientCall__Inputs(this);
  }

  get outputs(): ChangeTokenRoyaltyRecipientCall__Outputs {
    return new ChangeTokenRoyaltyRecipientCall__Outputs(this);
  }
}

export class ChangeTokenRoyaltyRecipientCall__Inputs {
  _call: ChangeTokenRoyaltyRecipientCall;

  constructor(call: ChangeTokenRoyaltyRecipientCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get newRecipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ChangeTokenRoyaltyRecipientCall__Outputs {
  _call: ChangeTokenRoyaltyRecipientCall;

  constructor(call: ChangeTokenRoyaltyRecipientCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get mintPassId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get seed(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class MintToCall extends ethereum.Call {
  get inputs(): MintToCall__Inputs {
    return new MintToCall__Inputs(this);
  }

  get outputs(): MintToCall__Outputs {
    return new MintToCall__Outputs(this);
  }
}

export class MintToCall__Inputs {
  _call: MintToCall;

  constructor(call: MintToCall) {
    this._call = call;
  }

  get mintPassId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get seed(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get recipient(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class MintToCall__Outputs {
  _call: MintToCall;

  constructor(call: MintToCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetOperatorFilterCall extends ethereum.Call {
  get inputs(): SetOperatorFilterCall__Inputs {
    return new SetOperatorFilterCall__Inputs(this);
  }

  get outputs(): SetOperatorFilterCall__Outputs {
    return new SetOperatorFilterCall__Outputs(this);
  }
}

export class SetOperatorFilterCall__Inputs {
  _call: SetOperatorFilterCall;

  constructor(call: SetOperatorFilterCall) {
    this._call = call;
  }

  get filter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOperatorFilterCall__Outputs {
  _call: SetOperatorFilterCall;

  constructor(call: SetOperatorFilterCall) {
    this._call = call;
  }
}

export class SetProjectRoyaltyRecipientCall extends ethereum.Call {
  get inputs(): SetProjectRoyaltyRecipientCall__Inputs {
    return new SetProjectRoyaltyRecipientCall__Inputs(this);
  }

  get outputs(): SetProjectRoyaltyRecipientCall__Outputs {
    return new SetProjectRoyaltyRecipientCall__Outputs(this);
  }
}

export class SetProjectRoyaltyRecipientCall__Inputs {
  _call: SetProjectRoyaltyRecipientCall;

  constructor(call: SetProjectRoyaltyRecipientCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetProjectRoyaltyRecipientCall__Outputs {
  _call: SetProjectRoyaltyRecipientCall;

  constructor(call: SetProjectRoyaltyRecipientCall) {
    this._call = call;
  }
}

export class SetScriptPieceCall extends ethereum.Call {
  get inputs(): SetScriptPieceCall__Inputs {
    return new SetScriptPieceCall__Inputs(this);
  }

  get outputs(): SetScriptPieceCall__Outputs {
    return new SetScriptPieceCall__Outputs(this);
  }
}

export class SetScriptPieceCall__Inputs {
  _call: SetScriptPieceCall;

  constructor(call: SetScriptPieceCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get data(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class SetScriptPieceCall__Outputs {
  _call: SetScriptPieceCall;

  constructor(call: SetScriptPieceCall) {
    this._call = call;
  }
}

export class SetTokenUriDelegateCall extends ethereum.Call {
  get inputs(): SetTokenUriDelegateCall__Inputs {
    return new SetTokenUriDelegateCall__Inputs(this);
  }

  get outputs(): SetTokenUriDelegateCall__Outputs {
    return new SetTokenUriDelegateCall__Outputs(this);
  }
}

export class SetTokenUriDelegateCall__Inputs {
  _call: SetTokenUriDelegateCall;

  constructor(call: SetTokenUriDelegateCall) {
    this._call = call;
  }

  get delegate(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetTokenUriDelegateCall__Outputs {
  _call: SetTokenUriDelegateCall;

  constructor(call: SetTokenUriDelegateCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class TransferSeedCall extends ethereum.Call {
  get inputs(): TransferSeedCall__Inputs {
    return new TransferSeedCall__Inputs(this);
  }

  get outputs(): TransferSeedCall__Outputs {
    return new TransferSeedCall__Outputs(this);
  }
}

export class TransferSeedCall__Inputs {
  _call: TransferSeedCall;

  constructor(call: TransferSeedCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get seed(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class TransferSeedCall__Outputs {
  _call: TransferSeedCall;

  constructor(call: TransferSeedCall) {
    this._call = call;
  }
}
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
} from "@alephium/web3";
import { default as OracleSubscriptionContractJson } from "../oracles/OracleSubscription.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace OracleSubscriptionTypes {
  export type Fields = {
    operator: HexString;
    subscriptionId: bigint;
    priceRequestTemplateId: HexString;
    subscriptionAllowedConsumerTemplateId: HexString;
    owner: Address;
    requestId: bigint;
  };

  export type State = ContractState<Fields>;

  export type NewAllowedCallerEvent = ContractEvent<{
    subscriptionContractId: HexString;
    address: Address;
    deployedContractId: HexString;
  }>;
  export type RemovedAllowedCallerEvent = ContractEvent<{
    subscriptionContractId: HexString;
    address: Address;
  }>;

  export interface CallMethodTable {
    getSubscriptionId: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getOwner: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<Address>;
    };
    isConsumerAddressAllowed: {
      params: CallContractParams<{ address: Address }>;
      result: CallContractResult<boolean>;
    };
    getOperator: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    requestPrice: {
      params: CallContractParams<{
        caller: Address;
        from: HexString;
        to: HexString;
      }>;
      result: CallContractResult<HexString>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
}

class Factory extends ContractFactory<
  OracleSubscriptionInstance,
  OracleSubscriptionTypes.Fields
> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as OracleSubscriptionTypes.Fields;
  }

  eventIndex = { NewAllowedCaller: 0, RemovedAllowedCaller: 1 };
  consts = { ErrorCodes: { InvalidCaller: BigInt(1) } };

  at(address: string): OracleSubscriptionInstance {
    return new OracleSubscriptionInstance(address);
  }

  tests = {
    getSubscriptionId: async (
      params: Omit<
        TestContractParams<OracleSubscriptionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getSubscriptionId", params);
    },
    getOwner: async (
      params: Omit<
        TestContractParams<OracleSubscriptionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<Address>> => {
      return testMethod(this, "getOwner", params);
    },
    isConsumerAddressAllowed: async (
      params: TestContractParams<
        OracleSubscriptionTypes.Fields,
        { address: Address }
      >
    ): Promise<TestContractResult<boolean>> => {
      return testMethod(this, "isConsumerAddressAllowed", params);
    },
    addAllowedCaller: async (
      params: TestContractParams<
        OracleSubscriptionTypes.Fields,
        { consumerAddress: Address }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "addAllowedCaller", params);
    },
    removeAllowedCaller: async (
      params: TestContractParams<
        OracleSubscriptionTypes.Fields,
        { consumerAddress: Address }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "removeAllowedCaller", params);
    },
    setOwner: async (
      params: TestContractParams<
        OracleSubscriptionTypes.Fields,
        { newOwner: Address }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "setOwner", params);
    },
    getOperator: async (
      params: Omit<
        TestContractParams<OracleSubscriptionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getOperator", params);
    },
    destroyPriceRequest: async (
      params: TestContractParams<
        OracleSubscriptionTypes.Fields,
        { priceRequest: HexString }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "destroyPriceRequest", params);
    },
    requestPrice: async (
      params: TestContractParams<
        OracleSubscriptionTypes.Fields,
        { caller: Address; from: HexString; to: HexString }
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "requestPrice", params);
    },
  };
}

// Use this object to test and deploy the contract
export const OracleSubscription = new Factory(
  Contract.fromJson(
    OracleSubscriptionContractJson,
    "=14-2+b=1-2=1-3+11f=1+12f=1-3+138=1-2+1=1+f=2-2+ee=89-1+4=16+ce017e0312416464696e67206e65772063616c6c657220402f20746f20746865206c697374206f6620616c6c6f7765642063616c6c6572206f6620737562736372697074696f6e20001600=115-1+b=16+ce017e030e52656d6f76652063616c6c657220402866726f6d2074686520616c6c6f7765642063616c6c6572206f6620737562736372697074696f6e20001600=167-1+a=22+16007e02402042616c616e636520696e20737562736372697074696f6e207265717565737420001600a47e021172656d61696e696e6720746f6b656e732000=156",
    "13470377bdb0612659c4261e3f542642353ad1472bc3b17ac33ee0262960a2bf"
  )
);

// Use this class to interact with the blockchain
export class OracleSubscriptionInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<OracleSubscriptionTypes.State> {
    return fetchContractState(OracleSubscription, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeNewAllowedCallerEvent(
    options: EventSubscribeOptions<OracleSubscriptionTypes.NewAllowedCallerEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      OracleSubscription.contract,
      this,
      options,
      "NewAllowedCaller",
      fromCount
    );
  }

  subscribeRemovedAllowedCallerEvent(
    options: EventSubscribeOptions<OracleSubscriptionTypes.RemovedAllowedCallerEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      OracleSubscription.contract,
      this,
      options,
      "RemovedAllowedCaller",
      fromCount
    );
  }

  subscribeAllEvents(
    options: EventSubscribeOptions<
      | OracleSubscriptionTypes.NewAllowedCallerEvent
      | OracleSubscriptionTypes.RemovedAllowedCallerEvent
    >,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvents(
      OracleSubscription.contract,
      this,
      options,
      fromCount
    );
  }

  methods = {
    getSubscriptionId: async (
      params?: OracleSubscriptionTypes.CallMethodParams<"getSubscriptionId">
    ): Promise<
      OracleSubscriptionTypes.CallMethodResult<"getSubscriptionId">
    > => {
      return callMethod(
        OracleSubscription,
        this,
        "getSubscriptionId",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getOwner: async (
      params?: OracleSubscriptionTypes.CallMethodParams<"getOwner">
    ): Promise<OracleSubscriptionTypes.CallMethodResult<"getOwner">> => {
      return callMethod(
        OracleSubscription,
        this,
        "getOwner",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    isConsumerAddressAllowed: async (
      params: OracleSubscriptionTypes.CallMethodParams<"isConsumerAddressAllowed">
    ): Promise<
      OracleSubscriptionTypes.CallMethodResult<"isConsumerAddressAllowed">
    > => {
      return callMethod(
        OracleSubscription,
        this,
        "isConsumerAddressAllowed",
        params,
        getContractByCodeHash
      );
    },
    getOperator: async (
      params?: OracleSubscriptionTypes.CallMethodParams<"getOperator">
    ): Promise<OracleSubscriptionTypes.CallMethodResult<"getOperator">> => {
      return callMethod(
        OracleSubscription,
        this,
        "getOperator",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    requestPrice: async (
      params: OracleSubscriptionTypes.CallMethodParams<"requestPrice">
    ): Promise<OracleSubscriptionTypes.CallMethodResult<"requestPrice">> => {
      return callMethod(
        OracleSubscription,
        this,
        "requestPrice",
        params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends OracleSubscriptionTypes.MultiCallParams>(
    calls: Calls
  ): Promise<OracleSubscriptionTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      OracleSubscription,
      this,
      calls,
      getContractByCodeHash
    )) as OracleSubscriptionTypes.MultiCallResults<Calls>;
  }
}

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
import { default as MinimalistExchangeContractJson } from "../usage-example/MinimalistExchange.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace MinimalistExchangeTypes {
  export type Fields = {
    owner: Address;
    alphPriceInUsd: bigint;
    subscriptionContractId: HexString;
    priceRequestContractId: HexString;
  };

  export type State = ContractState<Fields>;

  export type AlphPriceUpdatedEvent = ContractEvent<{ newPrice: bigint }>;

  export interface CallMethodTable {
    getAlphPriceInUsd: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getOracleSubscription: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getOracleOperator: {
      params: Omit<CallContractParams<{}>, "args">;
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
  MinimalistExchangeInstance,
  MinimalistExchangeTypes.Fields
> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as MinimalistExchangeTypes.Fields;
  }

  eventIndex = { AlphPriceUpdated: 0 };
  consts = {
    ErrorCodes: {
      InvalidCaller: BigInt(1),
      OracleDoesntExist: BigInt(2),
      PriceRequestDoesntExist: BigInt(4),
    },
  };

  at(address: string): MinimalistExchangeInstance {
    return new MinimalistExchangeInstance(address);
  }

  tests = {
    setNewOwner: async (
      params: TestContractParams<
        MinimalistExchangeTypes.Fields,
        { newOwner: Address }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "setNewOwner", params);
    },
    setNewsubScriptionContractId: async (
      params: TestContractParams<
        MinimalistExchangeTypes.Fields,
        { newSubscriptionContractId: HexString }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "setNewsubScriptionContractId", params);
    },
    getAlphPriceInUsd: async (
      params: Omit<
        TestContractParams<MinimalistExchangeTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getAlphPriceInUsd", params);
    },
    getOracleSubscription: async (
      params: Omit<
        TestContractParams<MinimalistExchangeTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getOracleSubscription", params);
    },
    getOracleOperator: async (
      params: Omit<
        TestContractParams<MinimalistExchangeTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getOracleOperator", params);
    },
    getPriceRequest: async (
      params: Omit<
        TestContractParams<MinimalistExchangeTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getPriceRequest", params);
    },
    fetchPrice: async (
      params: Omit<
        TestContractParams<MinimalistExchangeTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "fetchPrice", params);
    },
    completeFetchProcess: async (
      params: Omit<
        TestContractParams<MinimalistExchangeTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "completeFetchProcess", params);
    },
  };
}

// Use this object to test and deploy the contract
export const MinimalistExchange = new Factory(
  Contract.fromJson(
    MinimalistExchangeContractJson,
    "=27+1=1-2+5=1-2+1=1+f=184-2+3a=14+7e0315436f6d706172696e67206164647265737365733a200120001600a000=22+1400a0031400a003417e040a436f6d706172696e6720022c20022c2000=148+a0037e020a526573756c742069732000=116",
    "b606a511264bb45179e8c02ba808bc8fd646a741836267634900fd998852982b"
  )
);

// Use this class to interact with the blockchain
export class MinimalistExchangeInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<MinimalistExchangeTypes.State> {
    return fetchContractState(MinimalistExchange, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeAlphPriceUpdatedEvent(
    options: EventSubscribeOptions<MinimalistExchangeTypes.AlphPriceUpdatedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      MinimalistExchange.contract,
      this,
      options,
      "AlphPriceUpdated",
      fromCount
    );
  }

  methods = {
    getAlphPriceInUsd: async (
      params?: MinimalistExchangeTypes.CallMethodParams<"getAlphPriceInUsd">
    ): Promise<
      MinimalistExchangeTypes.CallMethodResult<"getAlphPriceInUsd">
    > => {
      return callMethod(
        MinimalistExchange,
        this,
        "getAlphPriceInUsd",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getOracleSubscription: async (
      params?: MinimalistExchangeTypes.CallMethodParams<"getOracleSubscription">
    ): Promise<
      MinimalistExchangeTypes.CallMethodResult<"getOracleSubscription">
    > => {
      return callMethod(
        MinimalistExchange,
        this,
        "getOracleSubscription",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getOracleOperator: async (
      params?: MinimalistExchangeTypes.CallMethodParams<"getOracleOperator">
    ): Promise<
      MinimalistExchangeTypes.CallMethodResult<"getOracleOperator">
    > => {
      return callMethod(
        MinimalistExchange,
        this,
        "getOracleOperator",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends MinimalistExchangeTypes.MultiCallParams>(
    calls: Calls
  ): Promise<MinimalistExchangeTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      MinimalistExchange,
      this,
      calls,
      getContractByCodeHash
    )) as MinimalistExchangeTypes.MultiCallResults<Calls>;
  }
}
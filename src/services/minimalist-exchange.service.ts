import { DUST_AMOUNT, ExecuteScriptResult, ONE_ALPH, SignerProvider } from '@alephium/web3'
import { AddAllowedConsumer, CompletePriceFetch, FetchPrice, RemoveAllowedConsumer } from 'artifacts/ts'

export const minimalistExchangeFetchPrice = async (
  signerProvider: SignerProvider,
  myExchangeAddress: string
): Promise<ExecuteScriptResult> => {
  return await FetchPrice.execute(signerProvider, {
    initialFields: { myExchange: myExchangeAddress },
    attoAlphAmount: ONE_ALPH * 2n
  })
}

export const completeFetchPrice = async (
  signerProvider: SignerProvider,
  myExchangeAddress: string
): Promise<ExecuteScriptResult> => {
  return await CompletePriceFetch.execute(signerProvider, {
    initialFields: { myExchange: myExchangeAddress },
    attoAlphAmount: DUST_AMOUNT
  })
}

export const removeConsumer = async (
  signerProvider: SignerProvider,
  subscriptionAddress: string,
  consumerAddress: string
): Promise<ExecuteScriptResult> => {
  return await RemoveAllowedConsumer.execute(signerProvider, {
    initialFields: { subscription: subscriptionAddress, address: consumerAddress },
    attoAlphAmount: DUST_AMOUNT
  })
}

export const addConsumer = async (
  signerProvider: SignerProvider,
  subscriptionAddress: string,
  consumerAddress: string
): Promise<ExecuteScriptResult> => {
  return await AddAllowedConsumer.execute(signerProvider, {
    initialFields: { subscription: subscriptionAddress, address: consumerAddress },
    attoAlphAmount: ONE_ALPH
  })
}

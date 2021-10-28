import JSBI from 'jsbi'

import { SolidityType } from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  /**
   * The only instance of the base class `Currency`.
   */
  // public static readonly ETHER: Currency = new Currency(18, 'BNB', 'BNB')
  public static readonly ETHER: Currency = new Currency(18, 'ZK', 'ZK')

  public static readonly OUTS: string[] = [
    '0xAed51219c8E94D86417d9F19480E88F8FcdF2054',
    '0x1230a99892f5a0b73d1190ccf9c818245462Cb4a',
    '0x6809Af34853608C44C659e030Fc405eDDef7Fba5'
  ]

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }
}

const ETHER = Currency.ETHER
const OUTS = Currency.OUTS
export { ETHER, OUTS }

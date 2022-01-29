export interface Currency {
    id: string;
    createdAt: string;
    updatedAt: string;
    type: CurrencyType;
    name: string;
    code: string;
    precision: number;
    maxAmount: number | null;
    minAmount: number | null;
    minBuyAmount: number | null;
    maxBuyAmount: number | null;
    addressRegex?: string;
    testnetAddressRegex?: string;
    supportsAddressTag?: boolean;
    addressTagRegex?: null | string;
    supportsTestMode?: boolean;
    supportsLiveMode?: boolean;
    isSuspended?: boolean;
    isSupportedInUS?: boolean;
    notAllowedUSStates?: NotAllowedUSState[];
    notAllowedCountries?: unknown[];
    isSellSupported?: boolean;
    confirmationsRequired?: number | null;
    minSellAmount?: number | null;
    maxSellAmount?: number | null;
}

export enum NotAllowedUSState {
    HI = 'HI',
    NY = 'NY',
    RI = 'RI',
    VI = 'VI'
}

export enum CurrencyType {
    CRYPTO = 'crypto',
    FIAT = 'fiat'
}

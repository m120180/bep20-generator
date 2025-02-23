import {networkIds} from "./networkIds";

export const feeList = {
    [networkIds.BitciMain]: {
        Hello: 10000,
        Simple: 25000,
        Standard: 35000,
        Burnable: 45000,
        Mintable: 55000,
        Common: 65000,
        Unlimited: 77000,
        Amazing: 90000,
    },
    [networkIds.BitciTest]: {
        Hello: 10000,
        Simple: 25000,
        Standard: 35000,
        Burnable: 45000,
        Mintable: 55000,
        Common: 65000,
        Unlimited: 77000,
        Amazing: 90000,
    },
    [networkIds.ArbitrumMain]: {
        Hello: 0.005,
        Simple: 0.01,
        Standard: 0.015,
        Burnable: 0.025,
        Mintable: 0.03,
        Common: 0.04,
        Unlimited: 0.05,
        Amazing: 0.08,
    },
    [networkIds.BnbMain]: {
        Hello: 0.05,
        Simple: 0.07,
        Standard: 0.09,
        Burnable: 0.15,
        Mintable: 0.18,
        Common: 0.22,
        Unlimited: 0.29,
        Amazing: 0.45,
    },
}


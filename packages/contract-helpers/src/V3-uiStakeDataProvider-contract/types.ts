import { BigNumber } from 'ethers';

export type StakedTokenData = {
  stakedTokenTotalSupply: BigNumber;
  stakedTokenTotalRedeemableAmount: BigNumber;
  stakeCooldownSeconds: BigNumber;
  stakeUnstakeWindow: BigNumber;
  rewardTokenPriceEth: BigNumber;
  distributionEnd: BigNumber;
  distributionPerSecond: BigNumber;
  stakedTokenPriceEth: BigNumber;
  stakeApy: BigNumber;
  inPostSlashingPeriod: boolean;
};

export type StakedContractUserData = {
  stakedTokenUserBalance: BigNumber;
  underlyingTokenUserBalance: BigNumber;
  stakedTokenRedeemableAmount: BigNumber;
  userCooldownAmount: BigNumber;
  userCooldownTimestamp: number;
  rewardsToClaim: BigNumber;
};

export type StakeUIUserData = {
  stakeTokenUserBalance: string;
  underlyingTokenUserBalance: string;
  stakeTokenRedeemableAmount: string;
  userCooldownAmount: string;
  userCooldownTimestamp: number;
  userIncentivesToClaim: string;
};

export type GeneralStakeUIDataHumanized = {
  stakeData: Array<{
    inPostSlashingPeriod: boolean;
    stakeTokenTotalSupply: string;
    stakeTokenTotalRedeemableAmount: string;
    stakeCooldownSeconds: number;
    stakeUnstakeWindow: number;
    stakeTokenPriceEth: string;
    rewardTokenPriceEth: string;
    stakeApy: string;
    distributionPerSecond: string;
    distributionEnd: string;
  }>;
  ethPriceUsd: string;
};

export type GetUserStakeUIDataHumanized = {
  stakeUserData: Array<{
    stakeTokenUserBalance: string;
    underlyingTokenUserBalance: string;
    stakeTokenRedeemableAmount: string;
    userCooldownAmount: string;
    userCooldownTimestamp: number;
    userIncentivesToClaim: string;
  }>;
  ethPriceUsd: string;
};
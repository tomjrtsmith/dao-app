import BN from "bn.js";

export const NULL_CONTRACT = 'null_contract.flux-dev';
export const MAX_GAS = new BN("300000000000000");
export const DAO_ACCOUNT_ID = process.env.REACT_APP_DAO_ACCOUNT_ID || '';
export const STORAGE_BASE = new BN('30000000000000000000000');
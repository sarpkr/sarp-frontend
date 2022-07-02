export const MAIN_NET = "MAIN_NET" as const;
export const TEST_NET = "TEST_NET" as const;

export type AddressType = {
  [key in typeof MAIN_NET | typeof TEST_NET]: string;
};

export const aTronAddress: AddressType = {
  MAIN_NET: "",
  TEST_NET: "TE7X9zUVyk4bYVczpLYtN8e95zbxKBRqX2",
};

export const dexAddress: AddressType = {
  MAIN_NET: "",
  TEST_NET: "TPjt7FadaLMzks7SoYiyg3ywbsDWo5t6UJ",
};

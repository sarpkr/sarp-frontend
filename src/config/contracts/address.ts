export const MAIN_NET = "MAIN_NET" as const;
export const TEST_NET = "TEST_NET" as const;

export type AddressType = {
  [key in typeof MAIN_NET | typeof TEST_NET]: string;
};

export const aTronAddress: AddressType = {
  MAIN_NET: "",
  TEST_NET: "TAnAKe2PB1j7My5dA17qbp5GJ1VTQivTk7",
};

export const dexAddress: AddressType = {
  MAIN_NET: "",
  TEST_NET: "TC88j2C5BkmrQfmZ69X4BjbaQnG73VYUpk",
};

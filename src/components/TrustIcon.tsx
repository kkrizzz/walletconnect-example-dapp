import * as React from "react";
import Icon from "./Icon";
import erc20 from "../assets/erc20.svg";
import { findCoinByNetwork } from "../helpers/trust";

interface ITrustIconProps {
  network: number;
}

const TrustIcon = ({ network }: ITrustIconProps) => {
  const coin = findCoinByNetwork(network);
  const iconUrl = `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${coin.id}/info/logo.png`
  return <Icon src={iconUrl} size={32} fallback={erc20} />;
};

export default TrustIcon;

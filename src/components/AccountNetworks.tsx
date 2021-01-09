import * as React from "react";

import Column from "./Column";
import TrustIcon from "./TrustIcon";
import { findCoinByNetwork, INetwork } from "../helpers/trust";
import styled from "styled-components";
import { ellipseAddress } from "../helpers/utilities";


const SAssetRow = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
const SAssetRowLeft = styled.div`
  display: flex;
`;
const SAssetName = styled.a`
  display: flex;
  margin: 0.3em;
  margin-left: 10px;
`;
const SAssetRowRight = styled.div`
  display: flex;
`;
// const SAssetBalance = styled.div`
//   display: flex;
// `;


const NetworkRow = ({ network, address }: INetwork) => {
  const asset = findCoinByNetwork(network);
  const explorerUrl = `${asset.explorer.url}${asset.explorer.accountPath}${address}`;

  return (
    <SAssetRow>
      <SAssetRowLeft>
        <TrustIcon network={network} />
        <SAssetName href={explorerUrl} target="_blank">{asset.name}</SAssetName>
      </SAssetRowLeft>
      <SAssetRowRight>
        <SAssetName href={explorerUrl} target="_blank">{ellipseAddress(address, 8)}</SAssetName>
        {/*<SAssetBalance>*/}
        {/*  {`${handleSignificantDecimals(convertAmountFromRawNumber(asset.balance), 8)} ${*/}
        {/*    asset.symbol*/}
        {/*  }`}*/}
        {/*</SAssetBalance>*/}
      </SAssetRowRight>
    </SAssetRow>
  );
};

interface IAccountNetworks {
  networks: INetwork[],
}

const AccountNetworks = ({ networks }: IAccountNetworks) => {
  return (
    <Column center>
      {networks.map(network => (
        <NetworkRow key={network.network} {...network} />
      ))}
    </Column>
  );
};

export default AccountNetworks;

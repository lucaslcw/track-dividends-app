import { ReactNode } from "react";

export interface ICardProps {
  ticker: string,
  quotas?: number,
  dividendsPerShare?: string,
  index: number,
  payday?: number,
  isDividendsScreen?: boolean,
  isWalletScreen?: boolean,
  isModal?: boolean,
}

export interface IButtonProps {
  flexDirection?: string,
  justifyContent?: string,
  alignItems?: string,
}

export interface IHeaderProps {
	title: string,
	value: number,
  isWalletScreen?: boolean,
  isDividendsScreen?: boolean,
}

export interface IContextValues {
  assets: IAsset[],
  asset: any,
  isVisible: boolean,
  handleGetAssets: () => void,
  handleGetAsset: (indexSelected: number) => void,
  handleSaveAsset: (asset: IAsset) => void,
  handleEditAsset: (asset: IAsset, indexSelected: number) => void,
  handleDeleteAsset: (indexSelected: number) => void,
  handleToggleIsVisible: () => void,
}

export interface IContextProviderProps {
  children?: ReactNode,
}

export interface IAsset {
  averagePrice: number,
  quotas: number,
  ticker: string,
}

export interface IRenderItem {
  item: IAsset|any,
  index: number,
}
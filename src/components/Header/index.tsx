"use client"

import { TonConnectButton, useTonWallet, useTonConnectUI, useTonAddress } from '@tonconnect/ui-react';
import Image from 'next/image'
import { Modal } from 'antd-mobile'
import Link from 'next/link'
import './index.scss';

const Header = () => {
  const [tonConnectUI, setOptions] = useTonConnectUI();
  const userFriendlyAddress = useTonAddress();
  const wallet = useTonWallet();
  const onOpenWallet = () => {
    tonConnectUI.openModal()
  }

  const openDisconnected = () => {
    Modal.alert({
      content: 'Disconnect?',
      showCloseButton: true,
      confirmText: 'Confirm',
      onConfirm: () => {
        tonConnectUI.disconnect()
      },
    })
  }

  console.log('userFriendlyAddress---', userFriendlyAddress);
  

  return <div className="header">
    <div className='icon-box'>
      <Image className='menu-icon' width={33} height={33} src="/imgs/menu.png" alt='menu'></Image>
      <Link href="/">
        <Image className='logo-icon' width={29} height={33} src="/imgs/logo.png" alt='logo'></Image>
      </Link>
    </div>
    
    <div className='menu-box'>
      <Link href="/ecosystem"  className='menu-item' style={{ textDecoration: 'none' }}>ECOSYSTEM</Link>
      <div className='menu-item' style={{ textDecoration: 'none' }}>RWA MARKET</div>
    </div>
    <div className="wallet-box">
      {
        !wallet && 
        <Image 
          onClick={() => onOpenWallet()}
          className='wallet-icon' 
          width={33} 
          height={33} 
          src="/imgs/wallet.png" 
          alt='wallet'></Image>
      }

      {
        wallet &&
        <TonConnectButton />
        // <span
        //   onClick={() => openDisconnected()}
        //   className="connected-wallet">
        //   {userFriendlyAddress.slice(0, 3) + '....' + userFriendlyAddress.slice(userFriendlyAddress.length -5, userFriendlyAddress.length)}
        // </span>
      }
    </div>

  </div>
}

export default Header
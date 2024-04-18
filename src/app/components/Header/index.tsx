import Image from 'next/image'
import './index.scss';

const Header = () => {
  return <div className="header">
    <div className='icon-box'>
      <Image className='menu-icon' width={33} height={33} src="/imgs/menu.png" alt='menu'></Image>
      <Image className='logo-icon' width={29} height={33} src="/imgs/logo.png" alt='logo'></Image>
    </div>
    
    <div className='menu-box'>
      <div className='menu-item'>ECOSYSTEM</div>
      <div className='menu-item'>RWA MARKET</div>
    </div>

    <div className="wallet-box">
      <Image className='wallet-icon' width={33} height={33} src="/imgs/wallet-icon.svg" alt='wallet'></Image>
    </div>

  </div>
}

export default Header
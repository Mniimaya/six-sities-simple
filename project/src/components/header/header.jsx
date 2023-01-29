import Logo from '../logo/logo';
import NavigationList from '../navigation-list/navigation-list';

export default function Header() {
    return (
        <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
             <Logo/>
            </div>
            <NavigationList/>
          </div>
        </div>
      </header>
  
    );
}

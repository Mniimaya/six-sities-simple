import DataProfile from "../data-profile/data-profile";
import LinkAuthorization from "../link-authorization/link-authorization";

export default function NavigationList() {
    return (
        <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <DataProfile/>
          </li>
          <li className="header__nav-item">
            <LinkAuthorization/>
          </li>
        </ul>
      </nav>
    );
}
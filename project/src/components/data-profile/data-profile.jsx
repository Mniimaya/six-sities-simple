import UserAvatar from "../user-avatar/user-avatar";
import UserEmail from "../user-email/user-email";

export default function DataProfile() {
    return (
        <div className="header__nav-profile">
            <UserAvatar/>
           <UserEmail/>
      </div>
    );
}

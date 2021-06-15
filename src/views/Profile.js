/* Login / Register form
    *LOGO*
    *H1*
    *P*
- Username
- Password
- GDPR radio-btn
- Log in-btn
*/
/* if LoggedIn => PROFILEVIEW
    *IMG*
    {username}
    {email}

    *H2*
    {order.details}
*/
import LoginOverlay from "../components/LoginOverlay";
// import OrderHistory from "../components/OrderHistory";

function Profile() {
  return (
    <section className="loginView">
      <LoginOverlay></LoginOverlay>
      {/* <OrderHistory></OrderHistory> */}
    </section>
  );
}

export default Profile;

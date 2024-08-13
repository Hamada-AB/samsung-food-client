export default function Header({ userInfo, setToken }) {
  return (
    <>
      <header>
        <div>
          <div className="header-head">
            <h2>
              Welcome <span>{userInfo?.username.toUpperCase() + "!"}</span>
            </h2>
            <div>
              <button
                className="sign-out-btn"
                onClick={() => {
                  // To sign out
                  setToken("");
                  localStorage.removeItem("jwt");
                }}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

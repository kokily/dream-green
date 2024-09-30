export function MobileToggle() {
  return (
    <button
      id="navbarToggler"
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      {' '}
      <span className="ion-android-menu"></span>{' '}
    </button>
  );
}

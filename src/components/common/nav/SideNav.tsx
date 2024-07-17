export function SideNav() {
  return (
    <ul className="navbar-nav attr-nav align-items-center">
      <li className="dropdown">
        <a className="nav-link" href="#" data-toggle="dropdown">
          <i className="ion-android-cart"></i>
          <span className="cart_count">2</span>
        </a>
        <div className="cart_box dropdown-menu dropdown-menu-right">
          <ul className="cart_list">
            <li>
              <a href="#" className="item_remove">
                <i className="ion-close"></i>
              </a>
              <a href="#">
                <img src="assets/images/cart_thamb1.png" alt="cart_thumb1" />
                Variable product 001
              </a>
              <span className="cart_quantity">
                {' '}
                1 x{' '}
                <span className="cart_amount">
                  {' '}
                  <span className="price_symbole">$</span>
                </span>
                78.00
              </span>
            </li>
            <li>
              <a href="#" className="item_remove">
                <i className="ion-close"></i>
              </a>
              <a href="#">
                <img src="assets/images/cart_thamb2.png" alt="cart_thumb2" />
                Ornare sed consequat
              </a>
              <span className="cart_quantity">
                {' '}
                1 x{' '}
                <span className="cart_amount">
                  {' '}
                  <span className="price_symbole">$</span>
                </span>
                81.00
              </span>
            </li>
          </ul>
          <div className="cart_footer">
            <p className="cart_total">
              <strong>Subtotal:</strong>{' '}
              <span className="cart_amount">
                {' '}
                <span className="price_symbole">$</span>
              </span>
              159.00
            </p>
            <p className="cart_buttons">
              <a href="#" className="btn view-cart">
                View Cart
              </a>
              <a href="#" className="btn checkout">
                Checkout
              </a>
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
}

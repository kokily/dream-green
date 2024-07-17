export function HeaderTop() {
  return (
    <div className="top-header bg-dark light_skin d-none d-md-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <ul className="contact_detail list_none text-center text-md-left">
              <li>
                <i className="ti-mobile"></i>031) 831-8852
              </li>
              <li>
                <i className="ti-location-pin"></i>경기도 화성시 팔탄면 동막길
                79-25
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list_none social_icons text-center border_social rounded_social social_white  text-md-right mt-2 mt-md-0">
              <li>
                <a href="#!">
                  <i className="ion-social-youtube-outline"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="ion-social-instagram-outline"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

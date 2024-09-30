import { FirstTop } from './tops/FirstTop';
import { SecondTop } from './tops/SecondTop';
import { ThirdTop } from './tops/ThirdTop';
import { ForthTop } from './tops/ForthTop';

export function FooterTop() {
  return (
    <div className="top_footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="medium_divider"></div>
          </div>
        </div>
        <div className="row">
          <FirstTop />

          <SecondTop />

          {/* Recent Posts */}
          <ThirdTop />

          {/* Client Images */}
          <ForthTop />
        </div>
      </div>
    </div>
  );
}

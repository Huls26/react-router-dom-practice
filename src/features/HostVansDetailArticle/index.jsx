import PropTypes from 'prop-types';

import BackArrow from '@components/BackArrow';
import BtnTypeStyle from '@components/BtnTypeStyle';

export default function HostVansDetailArticle({
  type, img, name, price,
}) {
  return (
    <section>
      <BackArrow />
      <article>
        <div>
          <div>
            <img src={img} alt="vans" />
          </div>

          <div>
            <BtnTypeStyle type={type} />
            <h1>{name}</h1>
            <h3>
              $
              {price}
              {' '}
              <span>/day</span>
            </h3>
          </div>
        </div>
      </article>
    </section>
  );
}

HostVansDetailArticle.propTypes = {
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

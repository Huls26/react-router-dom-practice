import PropTypes from 'prop-types';

export default function ArticleDetails({ name, type, description }) {
  return (
    <article className="font-bold font-inter font-lg text-dark-2 flex flex-col space-y-4">
      <h3>
        Name:
        {' '}
        <span className="font-medium capitalize">{name}</span>
        {' '}
      </h3>
      <h3>
        Category:
        {' '}
        <span className="font-medium capitalize">{type}</span>
        {' '}
      </h3>

      <h3>
        Description:
        {' '}

        <span className="font-medium capitalize">{description}</span>
      </h3>

      <h3>
        Visibility:
        {' '}
        <span className="font-medium">
          Public
        </span>
        {' '}
      </h3>
    </article>
  );
}

ArticleDetails.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

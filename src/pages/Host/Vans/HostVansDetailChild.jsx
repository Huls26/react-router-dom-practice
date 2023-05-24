export default function HostVansDetailChild() {
  return (
    <article className="font-bold font-inter font-lg text-dark-2 flex flex-col space-y-4">
      <h3>
        Name:
        {' '}
        <span className="font-medium">Modest Explorer</span>
        {' '}
      </h3>
      <h3>
        Category:
        {' '}
        <span className="font-medium">Simple</span>
        {' '}
      </h3>

      <h3>
        Description:
        {' '}

        <span className="font-medium">{' Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci delectus consequatur consequuntur laborum dolor suscipit! Hic maiores dolorum nisi nulla? '}</span>
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

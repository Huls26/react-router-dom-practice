import { useEffect } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import authReq from '@helper/authReq';
import reviewGraphImg from '@assets/images/reviews-graph.svg';

export async function loader({ request }) {
  const pathname = await authReq(request);

  if (!pathname) {
    return { data: ['something'], pathname };
  }

  return { data: [''], pathname };
}

export default function ReviewPage() {
  const navigate = useNavigate();
  const { pathname } = useLoaderData();

  useEffect(() => {
    if (pathname) {
      navigate(
        `/login?message=You must log in first.&redirectTo=${pathname}`,
        { replace: true },
      );
    }
  }, [pathname, navigate]);

  const reviewsData = [
    {
      rating: 5,
      name: 'Elliot',
      date: 'January 3, 2023',
      text: 'The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!',
      id: '1',
    },
    {
      rating: 5,
      name: 'Sandy',
      date: 'December 12, 2022',
      text: 'This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!',
      id: '2',
    },
  ];

  return (
    <section className="host-reviews">
      <div className="top-text">
        <h2>Your reviews</h2>
        <p>
          Last
          {' '}
          <span>30 days</span>
        </p>
      </div>
      <img
        className="graph"
        src={reviewGraphImg}
        alt="Review graph"
      />
      <h3>Reviews (2)</h3>
      {reviewsData.map((review) => (
        <div key={review.id}>
          <div className="review">
            {
            // maybe add a star for ratings
          }
            {/* {[...Array(review.rating)].map((_, i) => (
              <BsStarFill className="review-star" key={i} />
            ))} */}
            <div className="info">
              <p className="name">{review.name}</p>
              <p className="date">{review.date}</p>
            </div>
            <p>{review.text}</p>
          </div>
          <hr />
        </div>
      ))}
    </section>
  );
}

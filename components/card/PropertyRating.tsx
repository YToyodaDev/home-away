import { FaStar } from 'react-icons/fa';

function PropertyRating({
  propertyId,
  inPage,
}: {
  propertyId: string;
  inPage: boolean;
}) {
  // temp
  const rating = 4.7;
  const count = 10;

  const className = `flex gap-1 items-center ${inPage ? 'text-md' : 'text-xs'}`;
  const countText = count > 1 ? 'reviews' : 'review';
  const countValue = `(${count})  ${inPage ? countText : ''}`;
  return (
    <span className={className}>
      <FaStar />
      {rating} {countValue}
    </span>
  );
}

export default PropertyRating;

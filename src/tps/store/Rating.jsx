const Rating = ({ count, rate }) => {
  return (
    <span className="badge rounded-pill bg-primary">
      {rate} / {count}
    </span>
  );
};

export default Rating;

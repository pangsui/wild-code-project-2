import { useState } from "react";
const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
  gap: "4px",
  marginBottom: "2rem",
};

const textStyle = {
  lineHeight: "1",
  marginBottom: "2rem",
  fontSize: "1.5rem",
};

export default function StarRating({
  maxRating = 5,
  onSetRating,
}: { maxRating: number; onSetRating: (rating: number) => void }) {
  const [rating, setRating] = useState(0);
  const [onHover, setOnHover] = useState(0);

  const handleRating = (index: number) => {
    setRating(index + 1);
    onSetRating(index + 1);
  };
  const handleMouseEnter = (index: number) => {
    setOnHover(index + 1);
  };
  const handleMouseLeave = () => {
    setOnHover(0);
  };

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={`star-${Math.random()}`}
            handleRating={() => handleRating(i)}
            handleMouseEnter={() => handleMouseEnter(i)}
            handleMouseLeave={handleMouseLeave}
            full={onHover ? i < onHover : i < rating}
            index={i}
          />
        ))}
      </div>
      <p style={textStyle}>{onHover || rating || ""}</p>
    </div>
  );
}

function Star({
  handleMouseEnter,
  handleMouseLeave,
  handleRating,
  full,
  index,
}: {
  handleRating: (index: number) => void;
  full: boolean;
  index: number;
  handleMouseEnter: (index: number) => void;
  handleMouseLeave: () => void;
}) {
  const starStyle = {
    cursor: "pointer",
    background: "none",
    border: "none",
  };
  return (
    <button
      type="button"
      style={starStyle}
      onClick={() => handleRating(index)}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave()}
    >
      {full ? (
        <svg
          aria-hidden="true"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="gold"
          stroke="gold"
          xmlns="http://www.w3.org/2000/svg"
          strokeWidth="2"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )}
    </button>
  );
}

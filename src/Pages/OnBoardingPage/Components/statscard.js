import React from "react";
import { CardContainer, StatItem, StatIcon, StatTitle, StatDescription } from "./StatsCard.styles";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const StatsCard = () => {
  return (
    <CardContainer className="p-3 shadow-sm rounded bg-light"> {/* Bootstrap classes added */}
      <StatItem className="d-flex align-items-center mb-3">
        <StatIcon className="me-3">
          <span role="img" aria-label="Workout count">💪</span>
        </StatIcon>
        <div>
          <StatTitle className="mb-1">120K+</StatTitle> {/* Bootstrap margin utility */}
          <StatDescription>
            Thousands trust it for a reason, join the team and discover the benefits!
          </StatDescription>
        </div>
      </StatItem>
      <StatItem className="d-flex align-items-center mb-3">
        <StatIcon className="me-3">
          <span role="img" aria-label="Star rating">⭐</span>
        </StatIcon>
        <div>
          <StatTitle className="mb-1">4.8</StatTitle>
          <StatDescription>
            Positive ratings by pulse users around the world! Check the reviews here.
          </StatDescription>
        </div>
      </StatItem>
      <StatItem className="d-flex align-items-center">
        <div>
          <StatTitle className="mb-1">100+</StatTitle>
          <StatDescription>
            A lot of workouts available now and still counting more!
          </StatDescription>
        </div>
      </StatItem>
    </CardContainer>
  );
};

export default StatsCard;

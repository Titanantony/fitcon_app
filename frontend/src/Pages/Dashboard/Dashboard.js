import React from 'react';
import styled from "styled-components";
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

function Dashboard()  {
    const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/signIn" />; // Redirect if not logged in
  }
  const dates = ["Sun 22", "Mon 23", "Tue 24", "Wed 25", "Thu 26", "Fri 27", "Sat 28"];
  const plans = [
    {
      level: "Medium",
      title: "Yoga Group",
      date: "25 Nov.",
      time: "14:00 - 15:00",
      room: "A5 room",
      trainer: "Tiffany Way",
    },
    {
      level: "Light",
      title: "Balance",
      date: "28 Nov.",
      time: "18:00 - 19:30",
      room: "A2 room",
      trainer: "Tiffany Way",
    },
  ];

  return (
    <Container>
      {/* Header Section */}
      <Header>
        <h1>Daily Challenge</h1>
        <p>Do your plan before 09:00 AM</p>
        <AvatarGroup>
          <Avatar src="https://via.placeholder.com/40" alt="User 1" />
          <Avatar src="https://via.placeholder.com/40" alt="User 2" />
          <Avatar src="https://via.placeholder.com/40" alt="User 3" />
          <MoreAvatars>+4</MoreAvatars>
        </AvatarGroup>
      </Header>

      {/* Date Picker */}
      <DatePicker>
        {dates.map((date, index) => (
          <Date key={index} active={index === 3}>
            {date}
          </Date>
        ))}
      </DatePicker>

      {/* Plan Section */}
      <Section>
        <h2>Your Plan</h2>
        <PlanList>
          {plans.map((plan, index) => (
            <PlanCard key={index}>
              <Level level={plan.level}>{plan.level}</Level>
              <Title>{plan.title}</Title>
              <Details>
                <p>{plan.date}</p>
                <p>{plan.time}</p>
                <p>{plan.room}</p>
              </Details>
              <Trainer>
                <p>Trainer</p>
                <p>{plan.trainer}</p>
              </Trainer>
            </PlanCard>
          ))}
        </PlanList>
      </Section>
    </Container>
  );
};

export default Dashboard


/* Styled Components */
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  color: ${(props) => props.theme.textDark || "#000"};
  background-color: ${(props) => props.theme.secondary || "#F5F5F5"};
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    color: ${(props) => props.theme.primary || "#5771ff"};
  }

  p {
    color: ${(props) => props.theme.textDark || "#000"};
    margin: 5px 0;
  }
`;

const AvatarGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.primary || "#5771ff"};
`;

const MoreAvatars = styled.div`
  background-color: ${(props) => props.theme.primary || "#5771ff"};
  color: ${(props) => props.theme.textLight || "#fff"};
  font-size: 12px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DatePicker = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  overflow-x: auto;
`;

const Date = styled.div`
  padding: 10px 15px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.active ? props.theme.primary || "#5771ff" : "transparent"};
  color: ${(props) => (props.active ? props.theme.textLight || "#fff" : "#000")};
  cursor: pointer;
  text-align: center;
`;

const Section = styled.div`
  h2 {
    margin-bottom: 20px;
    font-size: 18px;
  }
`;

const PlanList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const PlanCard = styled.div`
  background: ${(props) => props.theme.textLight || "#fff"};
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: calc(50% - 10px);

  p {
    margin: 5px 0;
  }
`;

const Level = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => (props.level === "Medium" ? "#FF8C42" : "#85D996")};
`;

const Title = styled.h3`
  margin: 10px 0;
  font-size: 16px;
`;

const Details = styled.div`
  margin-bottom: 10px;
  color: ${(props) => props.theme.textDark || "#000"};
`;

const Trainer = styled.div`
  border-top: 1px solid ${(props) => props.theme.secondary || "#f5f5f5"};
  padding-top: 10px;

  p {
    font-size: 14px;
    margin: 0;
  }
`;
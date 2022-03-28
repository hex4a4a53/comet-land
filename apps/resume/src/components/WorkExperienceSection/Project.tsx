import styled from '@emotion/styled';
import { useTheme } from '@nextui-org/react';
import { IProject } from '../../../_content/Work-Experience';
import Li from '../Li';

function Project({ title, description, startDate, endDate, which, techStack }: IProject) {
  const { theme } = useTheme();

  return (
    <Div>
      <h3>{title}</h3>
      <small>
        {startDate} ~ {endDate}
      </small>
      <span>{description}</span>
      {which.length > 0 && (
        <ul>
          {which.map((each, index) => (
            <Li key={index} theme={theme}>
              {each}
            </Li>
          ))}
        </ul>
      )}
      <span>{techStack}</span>
    </Div>
  );
}

export default Project;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;
`;
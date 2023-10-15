import { Container } from 'components/App/App.styled';
import { FaSearch } from 'react-icons/fa';
import { Form, Button, Input, SectionSearch } from './Movies.styled';

const Movies = () => {
  return (
    <>
      <SectionSearch>
        <Container>
          <Form>
            <Input
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search"
            />
            <Button type="submit">
              <FaSearch />
            </Button>
          </Form>
        </Container>
      </SectionSearch>
    </>
  );
};

export default Movies;

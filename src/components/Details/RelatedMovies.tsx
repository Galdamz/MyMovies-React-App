import { SimpleGrid, VStack, Text, Heading } from '@chakra-ui/react';
import { MovieData } from '../../types/Navigation';
import MovieCard from '../Home/MovieCard';

interface Props {
  movies: Array<MovieData>
}

const RelatedMovies = (props: Props) => {

  const { movies } = props;
  return (
    <VStack >
      <Heading fontSize={'3xl'}>Top Picks For You</Heading>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing={10}
        justifyContent={'center'}
      >
        {movies.map((value: MovieData, index) => (
          <MovieCard MovieData={value} key={index} />
        )
        )}
      </SimpleGrid>
    </VStack>
  )
}

export default RelatedMovies;
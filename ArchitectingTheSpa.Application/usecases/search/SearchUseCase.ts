import { UseCase } from 'interactr/usecase';

import SearchOutputPort from './SearchOutputPort';

class SearchUseCase implements UseCase<SearchOutputPort> {
  query: string;
  page: number;
}

export default SearchUseCase;
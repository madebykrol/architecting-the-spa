import { UseCase } from 'interactr/UseCase';

import SearchOutputPort from './SearchOutputPort';

class SearchUseCase implements UseCase<SearchOutputPort> {
  query: string;
  page: number;

  constructor(query: string, page: number) {
    this.query = query;
    this.page = page;
  }
}

export default SearchUseCase;
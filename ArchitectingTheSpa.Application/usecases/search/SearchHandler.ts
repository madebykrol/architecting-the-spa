import { Interactor } from 'interactr/Interactor';
import { UseCaseResult } from 'interactr/UseCaseResult';

import SearchUseCase from './SearchUseCase';
import SearchOutputPort from './SearchOutputPort';

import SearchService from '../../services/SearchService';
import OrderDirection from '../../services/OrderDirection'

class SearchHandler implements Interactor<SearchUseCase, SearchOutputPort> {

  constructor(private searchService: SearchService) {  }

  async execute(usecase: SearchUseCase, outputPort: SearchOutputPort): Promise<UseCaseResult> {
    let result = await this.searchService.search(usecase.query, null, 10, 0, OrderDirection.Desc);

    outputPort.displayResult(result.hits);

    return new UseCaseResult(true);
  }
}
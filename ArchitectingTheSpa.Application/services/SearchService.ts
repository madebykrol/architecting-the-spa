import SearchResult from './SearchResult';
import OrderDirection from './OrderDirection';
import Facet from './Facet';

abstract class SearchService {
  abstract search(query: string, facets: Array<Facet>, take:number, skip: number, order: OrderDirection): Promise<SearchResult>;
}

export default SearchService;
import { UseCase } from 'interactr/UseCase';
import SearchOutputPort from './SearchOutputPort';
declare class SearchUseCase implements UseCase<SearchOutputPort> {
    query: string;
    page: number;
    constructor(query: string, page: number);
}
export default SearchUseCase;
//# sourceMappingURL=SearchUseCase.d.ts.map
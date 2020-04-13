import React from 'react';

import ISearchScreenProps from './ISearchScreenProps';
import ISearchScreenState from './ISearchScreenState';

import SearchField from '../../shared/searchfield/SearchField';

import SearchOutputPort from '../../../../../../ArchitectingTheSpa.Application/usecases/search/SearchOutputPort';
import SearchUseCase from '../../../../../../ArchitectingTheSpa.Application/usecases/search/SearchUseCase';



class SearchScreen extends React.Component<ISearchScreenProps, ISearchScreenState> implements SearchOutputPort {

  constructor(props: ISearchScreenProps) {
    super(props);

    this.state = {results: new Array<any>(), query: "", selectedFacets: new Array<any>()}
  }

  displayResult(result: any): void {
      throw new Error('Method not implemented.');
  }

  handleSearch(query: string): void {
    this.props.interactor.execute(new SearchUseCase(query, 1), this);
  }

  render() {
    return (
      <div>
        <SearchField searchHandler={this.handleSearch}/>

        <ul>
          {this.state.results.map(x => {
            return (
              <li>

              </li>
            )
            })}
        </ul>
      </div>
    );
  }

}

export default SearchScreen;
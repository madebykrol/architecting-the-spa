import React from 'react';

import ISearchScreenProps from './ISearchScreenProps';
import ISearchScreenState from './ISearchScreenState';

import SearchOutputPort from './usecases/search/SearchOutputPort';


class SearchScreen extends React.Component<ISearchScreenProps, ISearchScreenState> implements SearchOutputPort {

  constructor(props: ISearchScreenProps) {
    super(props);
  }

  render() {
    return (
      <div>
        SEARCH
      </div>
    );
  }

}

export default SearchScreen;
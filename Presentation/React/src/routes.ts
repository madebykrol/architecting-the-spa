import StartScreen from './components/screens/start/StartScreen';
import SearchScreen from './components/screens/search/SearchScreen';
//import { SearchServiceImpl } from './infrastructure/services/SearchServiceImpl';
//import { SearchInteractor } from './application/usecases/search/SearchInteractor';

export const routes = [
  {
    path: "/",
    component: StartScreen,
    exact: true,
    routes: []
  },
  {
    path: "/search",
    component: SearchScreen,
    exact: true,
    //props: {interactor: new SearchInteractor(new SearchServiceImpl())}
  }
  //{
  //  path: "/tacos",
  //  component: Tacos,
  //  routes: [
  //    {
  //      path: "/tacos/bus",
  //      component: Bus
  //    },
  //    {
  //      path: "/tacos/cart",
  //      component: Cart
  //    }
  //  ]
  //}
];
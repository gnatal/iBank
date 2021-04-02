import { Reducer } from 'redux';
import { Plano } from '../../types/dash-board';
import { DashboardActions, DashboardData, Screen, Transactions } from './types';

const getCurrentScreen = () => {
  const screen = localStorage.getItem('@current-screen');
  if (!screen) return 'transactions';
  return screen;
};

const INITIAL_STATE: DashboardData = {
  current_screen: getCurrentScreen() as Screen,
};

const reducer: Reducer<DashboardData> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DashboardActions.CHANGE_SCREEN:
      const screenToChange = action.payload as Screen;
      localStorage.setItem('@current-screen', screenToChange);
      return { ...state, current_screen: screenToChange };

    case DashboardActions.INSERT_TRANSACTION_DATA:
      const dataToChange = action.payload as Transactions;

      return { ...state, transactions_data: dataToChange };

    case DashboardActions.INSERT_PLANS_DATA:
      const plasnToChange = action.payload as Plano[];

      return { ...state, plans_data: plasnToChange };

    default:
      return state;
  }
};

export default reducer;

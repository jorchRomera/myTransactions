import { MyBalancePresenter, MyBalanceView } from '../myBalance/MyBalancePresenter';
import { Provider } from '../../core/Provider';

export class PresenterFactory {
    myBalance(myBalanceView: MyBalanceView): MyBalancePresenter {
        return new MyBalancePresenter(
            myBalanceView,
            Provider.getTransactions(),
        );
    }
}

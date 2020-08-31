import { anything, capture, instance, mock, verify, when } from 'ts-mockito';
import { MyBalancePresenter, MyBalanceView } from './MyBalancePresenter';

describe('GamePresenter should', () => {
    it('present the game in the proper format', async () => {
        // when(getGame.execute()).thenReturn(defaultGame);
        //
        await presenter.start();
        //
        // verify(getGame.execute()).called();
        // const [viewModel] = capture(view.updateGame).last();
        // expect(viewModel.chipPosition[0]).toStrictEqual(defaultGame.chip.position.row);
        // expect(viewModel.chipPosition[1]).toStrictEqual(defaultGame.chip.position.column);
        // expect(viewModel.movesDone).toBe(defaultGame.movesDone);
        // expect(viewModel.movesLeft).toBe(defaultGame.movesLeft);
        // expect(viewModel.status).toBe(defaultGame.status.valueOf());
        // expect(viewModel.board.cells.length).toBe(defaultGame.board.cells.length);
        // expect(viewModel.board.columns).toBe(defaultGame.board.columns);
    });

    beforeEach(() => {
        view = mock<MyBalanceView>();
        // getGame = mock<GetGame>();
        // moveRight = mock<MoveRight>();
        // moveLeft = mock<MoveLeft>();
        // moveUp = mock<MoveUp>();
        // moveDown = mock<MoveDown>();
        presenter = myBalancePresenter();
        // when(getGame.execute()).thenReturn(defaultGame);
    });

    function myBalancePresenter(): MyBalancePresenter {
        return new MyBalancePresenter(
            instance(view),
            // instance(moveDown)
        );
    }

    let view: MyBalanceView;
    // let getGame: GetGame;
    let presenter: MyBalancePresenter;
});

import chai from 'chai';
import { CatActions } from '../../../../src/common/actions/CatActions';
import { Action } from '../../../../src/common/constants/Action';
const { expect } = chai;

describe('ActionCreators', function () {
    context('Group "CatActions"', function () {
        it('"fetchRandomCatStart" return correct redux action-object', function () {
            const action = CatActions.fetchRandomCatStart();
            expect(action).to.deep.equal({
                type : Action.RANDOM_CAT_FETCH_DATA_START
            });
        });
    });
});
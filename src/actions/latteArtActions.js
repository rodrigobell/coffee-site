import * as types from './actionTypes';

export function createLatteArt(latteArt) {
	return { type: types.CREATE_LATTE_ART, latteArt };
}
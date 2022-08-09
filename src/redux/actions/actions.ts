import { Dispatch } from "react";
import { ISearchResItems, ISearchResult, seaarchInputs } from "../reducer/reducer.types";
import {
    IActionsType,
    UpdateErrordispatchProps,
    UpdateGalleryispatchProps,
    UpdateInputdispatchProps,
    UpdateSearchResultsdispatchProps,
    UpdateSelectImagedispatchProps
} from "./actions.types";

export const actionsType: IActionsType = {
    UPDATE_SEARCH_RESULT: 'UPDATE_SEARCH_RESULT',
    UPDATE_SELECTED_IMAGE: 'UPDATE_SELECTED_IMAGE',
    UPDATE_ERROR_TOAST: 'UPDATE_ERROR_TOAST',
    UPDATE_SUCCESS_TOAST: 'UPDATE_SUCCESS_TOAST',
    UPDATE_GALLERY: 'UPDATE_GALLERY',
    SHOW_ERROR: 'SHOW_ERROR',
    UPDATE_INPUT: 'UPDATE_INPUT'
}

export const raiseError = (error: string) => (dispatch: Dispatch<UpdateErrordispatchProps>) => {
    dispatch({ type: actionsType.SHOW_ERROR, error });
    setTimeout(() => {
        dispatch({ type: actionsType.SHOW_ERROR, error: '' })
    }, 100);
}

export const updateSearchResults = (searchResult: ISearchResult) => (dispatch: Dispatch<UpdateSearchResultsdispatchProps>) => {
    dispatch({ type: actionsType.UPDATE_SEARCH_RESULT, searchResult: searchResult })
}

export const updateSelectedImage = (selectedResult: ISearchResItems | null) => (dispatch: Dispatch<UpdateSelectImagedispatchProps>) => {
    dispatch({ type: actionsType.UPDATE_SELECTED_IMAGE, selectedResult: selectedResult })
}

export const updateGallery = (gallery: Array<string>) => (dispatch: Dispatch<UpdateGalleryispatchProps>) => {
    dispatch({ type: actionsType.UPDATE_GALLERY, gallery: gallery })
}

export const updateInput = (inputs: seaarchInputs) => (dispatch: Dispatch<UpdateInputdispatchProps>) => {    
    dispatch({ type: actionsType.UPDATE_INPUT, inputs: inputs })
}

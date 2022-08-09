import { ISearchResItems, ISearchResult, seaarchInputs } from "../reducer/reducer.types";
import { actionsType } from "./actions";

export interface IActionsType {
    UPDATE_SEARCH_RESULT: string;
    UPDATE_ERROR_TOAST: string;
    UPDATE_SELECTED_IMAGE: string;
    UPDATE_SUCCESS_TOAST: string;
    UPDATE_GALLERY: string;
    SHOW_ERROR: string;
    UPDATE_INPUT: string;
}

export interface UpdateErrordispatchProps {
  type: typeof actionsType.SHOW_ERROR;
  error: string;
}

export interface UpdateSearchResultsdispatchProps {
  type: typeof actionsType.UPDATE_SEARCH_RESULT;
  searchResult: ISearchResult;
}

export interface UpdateSelectImagedispatchProps {
  type: typeof actionsType.UPDATE_SELECTED_IMAGE;
  selectedResult: ISearchResItems | null;
}

export interface UpdateGalleryispatchProps {
  type: typeof actionsType.UPDATE_GALLERY;
  gallery: Array<string>;
}
export interface UpdateInputdispatchProps {
  type: typeof actionsType.UPDATE_INPUT;
  inputs: seaarchInputs;
}

import {
  SET_LOADING_SEARCH,
  GET_SEARCH_CAMPAIGNS,
  GET_SEARCH_POPULAR,
  GET_SEARCH_URGENT,
  GET_SEARCH_LESSDONATE,
  SET_ERROR_SEARCH,
  SET_ERROR_SEARCH_FALSE,
} from "../actions/actionTypes";

const initialState = {
  documents: [],
  loading: false,
  totalPages: 1,
  onPage: 1,
  isError: false,
  errorMsg: "",
};

export default function newCampaignReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_SEARCH:
      return { ...state, loading: !state.loading };
    case SET_ERROR_SEARCH_FALSE:
      return {
        ...state,
        isError: false,
        errorMsg: "",
      };
    case GET_SEARCH_CAMPAIGNS:
      return {
        ...state,
        documents: action.posts.document,
        totalPages: action.posts.total_pages,
        onPage: action.posts.on_page,
      };
    case GET_SEARCH_POPULAR:
      return {
        ...state,
        documents: action.posts.document,
        totalPages: action.posts.total_pages,
        onPage: action.posts.on_page,
      };
    case GET_SEARCH_URGENT:
      return {
        ...state,
        documents: action.posts.document,
        totalPages: action.posts.total_pages,
        onPage: action.posts.on_page,
      };
    case GET_SEARCH_LESSDONATE:
      return {
        ...state,
        documents: action.posts.document,
        totalPages: action.posts.total_pages,
        onPage: action.posts.on_page,
      };
    case SET_ERROR_SEARCH:
      return {
        ...state,
        isError: true,
        errorMsg: action.errorMsg,
      };
    default:
      return state;
  }
}

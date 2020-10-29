import {
  SET_LOADING_CATEGORY,
  GET_CATEGORY_CAMPAIGNS,
  GET_CATEGORY_POPULAR,
  GET_CATEGORY_URGENT,
  GET_CATEGORY_LESSDONATE,
  SET_ERROR_CATEGORY,
  SET_ERROR_CATEGORY_FALSE,
} from "../actions/actionTypes";

const initialState = {
  documents: [],
  loading: false,
  status: "",
  totalPages: 1,
  onPage: 1,
  isError: false,
  errorMsg: "",
};

export default function newCampaignReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_CATEGORY:
      return { ...state, loading: !state.loading };
    case SET_ERROR_CATEGORY_FALSE:
      return {
        ...state,
        isError: false,
        errorMsg: "",
      };
    case GET_CATEGORY_CAMPAIGNS:
      return {
        ...state,
        documents: action.posts.document,
        status: action.status,
        totalPages: action.posts.total_pages,
        onPage: action.posts.on_page,
      };
    case GET_CATEGORY_POPULAR:
      return {
        ...state,
        documents: action.posts.ranked,
        status: action.status,
        totalPages: action.posts.total_pages,
        onPage: action.posts.on_page,
      };
    case GET_CATEGORY_URGENT:
      return {
        ...state,
        documents: action.posts.urgent,
        status: action.status,
        totalPages: action.posts.total_pages,
        onPage: action.posts.on_page,
      };
    case GET_CATEGORY_LESSDONATE:
      return {
        ...state,
        documents: action.posts.less,
        status: action.status,
        totalPages: action.posts.total_pages,
        onPage: action.posts.on_page,
      };
    case SET_ERROR_CATEGORY:
      return {
        ...state,
        isError: true,
        errorMsg: action.errorMsg,
      };
    default:
      return state;
  }
}

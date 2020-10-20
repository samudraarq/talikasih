import { SET_LOADING, GET_NEW_CAMPAIGNS } from "../actions/actionTypes";

const initialState = {
  documents: [],
  loading: false,
  status: "",
  totalPages: 1,
  onPage: 1,
};

export default function campaignReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: !state.loading };
    case GET_NEW_CAMPAIGNS:
      return {
        ...state,
        documents: action.posts.document,
        status: action.status,
        totalPages: action.posts.total_pages,
        onPage: action.posts.on_page,
      };
    default:
      return state;
  }
}

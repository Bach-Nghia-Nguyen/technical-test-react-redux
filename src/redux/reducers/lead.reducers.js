import * as types from "../constants/lead.constants";

const initialState = {
  leads: [],
  selectedLead: null,
  loading: false,
};

const leadReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    /**
     * Get leads
     */
    case types.GET_LEADS_REQUEST:
      return { ...state, loading: true };
    case types.GET_LEADS_SUCCESS:
      return { ...state, leads: payload, loading: false };
    case types.GET_LEADS_FAILURE:
      return { ...state, loading: false };

    /**
     * Create lead
     */
    case types.CREATE_LEAD_REQUEST:
      return { ...state, loading: true };
    case types.CREATE_LEAD_SUCCESS:
      return { ...state, loading: false };
    case types.CREATE_LEAD_FAILURE:
      return { ...state, loading: false };

    /**
     * Update lead mark
     */
    case types.UPDATE_LEAD_MARK_REQUEST:
      return { ...state, loading: true };
    case types.UPDATE_LEAD_MARK_SUCCESS:
      return { ...state, selectedLead: payload, loading: false };
    case types.UPDATE_LEAD_MARK_FAILURE:
      return { ...state, loading: false };

    /**
     * Delete lead
     */
    case types.DELETE_LEAD_REQUEST:
      return { ...state, loading: true };
    case types.DELETE_LEAD_SUCCESS:
      return { ...state, loading: false };
    case types.DELETE_LEAD_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default leadReducers;

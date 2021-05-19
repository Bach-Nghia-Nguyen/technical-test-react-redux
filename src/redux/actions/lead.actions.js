import * as types from "../constants/lead.constants";
import api from "../../apiService";

const getLeads = () => async (dispatch) => {
  dispatch({ type: types.GET_LEADS_REQUEST, payload: null });
  try {
    const response = await api.get(`/leads`);
    dispatch({ type: types.GET_LEADS_SUCCESS, payload: response.data.data });
  } catch (error) {
    dispatch({ type: types.GET_LEADS_FAILURE, payload: error });
  }
};

const createLead =
  ({ firstName, lastName, email, mobile, locationType, locationString }) =>
  async (dispatch) => {
    dispatch({ type: types.CREATE_LEAD_REQUEST, payload: null });
    try {
      const response = await api.post(`/leads`, {
        firstName,
        lastName,
        email,
        mobile,
        locationType,
        locationString,
      });
      dispatch({
        type: types.CREATE_LEAD_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({ type: types.CREATE_LEAD_FAILURE, payload: error });
    }
  };

const giveLeadMark = (leadId, communication) => async (dispatch) => {
  dispatch({ type: types.UPDATE_LEAD_MARK_REQUEST, payload: null });
  try {
    const response = await api.put(`/mark_lead/${leadId}`, { communication });
    dispatch({
      type: types.UPDATE_LEAD_MARK_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({ type: types.UPDATE_LEAD_MARK_FAILURE, payload: error });
  }
};

const deleteLead = (leadId) => async (dispatch) => {
  dispatch({ type: types.DELETE_LEAD_REQUEST, payload: null });
  try {
    const response = await api.delete(`/leads/${leadId}`);

    dispatch({ type: types.DELETE_LEAD_SUCCESS, payload: response.data.data });
  } catch (error) {
    dispatch({ type: types.DELETE_LEAD_FAILURE, payload: error });
  }
};

export const leadActions = {
  getLeads,
  createLead,
  giveLeadMark,
  deleteLead,
};

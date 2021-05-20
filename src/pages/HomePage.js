import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AddLeadForm from "../components/AddLeadForm";
import DeleteLeadModal from "../components/DeleteLeadModal";
import MarkForm from "../components/MarkForm";
import { leadActions } from "../redux/actions/lead.actions";

const HomePage = () => {
  const dispatch = useDispatch();
  const leads = useSelector((state) => state.lead.leads);
  const loading = useSelector((state) => state.lead.loading);
  const [showAddLead, setShowAddLead] = useState(false);
  const [showMark, setShowMark] = useState(false);
  const [showDeleteLead, setShowDeleteLead] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);

  useEffect(() => {
    const getAllLeads = async () => {
      dispatch(leadActions.getLeads());
    };
    getAllLeads();
  }, [dispatch]);
  return (
    <Container>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Button
            onClick={() => setShowAddLead(true)}
            className="show-add-lead-btn"
            style={{ backgroundColor: "orange" }}
          >
            Add Lead
          </Button>

          <Table className="lead-info-table">
            <thead className="lead-table-header">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Location Type</th>
                <th>Location String</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads &&
                leads.length > 0 &&
                leads.map((lead) => {
                  return (
                    <tr key={lead._id}>
                      <td>{`${lead.first_name} ${lead.last_name}`}</td>
                      <td>{lead.email}</td>
                      <td>{lead.mobile}</td>
                      <td>{lead.location_type}</td>
                      <td>{lead.location_string}</td>
                      <td>
                        <Button
                          className="show-mark-btn"
                          onClick={() => {
                            setSelectedLead({
                              id: lead._id,
                              communication: lead.communication,
                            });
                            setShowMark(true);
                          }}
                        >
                          Mark Update
                        </Button>
                        <Button
                          className="show-delete-lead-btn"
                          onClick={() => {
                            setSelectedLead({ id: lead._id });
                            setShowDeleteLead(true);
                          }}
                        >
                          Delete Lead
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
          <AddLeadForm showModal={showAddLead} setShowModal={setShowAddLead} />
          <MarkForm
            showModal={showMark}
            setShowModal={setShowMark}
            lead={selectedLead}
          />
          <DeleteLeadModal
            showModal={showDeleteLead}
            setShowModal={setShowDeleteLead}
            lead={selectedLead}
          />
        </>
      )}
    </Container>
  );
};

export default HomePage;

import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/button";
import ModalComponent from "../components/modal";
import useFetch_DELETE from "../services/http/Delete";
import useFetch_GET from "../services/http/Get";
import colors from "../utils/colors";

const Users = () => {
  const [reload, setReload] = useState(false);
  const {
    isLoading: isLoading_GET,
    error: error_GET,
    data: data_GET,
    getData,
  } = useFetch_GET();

  const {
    isLoading: isLoading_DELETE,
    error: error_DELETE,
    data: data_DELETE,
    deleteData,
  } = useFetch_DELETE();

  const navigate = useNavigate();
  const onClickDelete = (id) => {
    deleteData(`api/employee/${id}`);
    setReload(!reload);
  };
  // const [totalSalary, setTotalSalary] = useState(0);
  var totalSalary = 0;
  if (data_GET !== null) {
    data_GET?.users.forEach((element) => {
      console.log(element.salary);
      totalSalary += parseInt(element.salary);
    });
  }
  useEffect(() => {
    getData("/api/employee");
  }, [reload, isLoading_DELETE]);
  if (isLoading_GET || isLoading_DELETE) {
    return <Spinner />;
  }
  return (
    <div className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Contact No.</th>
            <th>Gender</th>
            <th>Salary</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data_GET?.users.length > 0 ? (
            data_GET.users?.map((data, id) => {
              return (
                <tr key={data._id}>
                  <td>{id + 1}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.email}</td>
                  <td>{data.contactNumber}</td>
                  <td>{data.gender}</td>
                  <td>{data.salary}</td>
                  <td>
                    <CustomButton
                      color={colors.primary.harmonyBlue}
                      fullWidth={false}
                      label={"View"}
                      onClick={() => {
                        navigate(`/employee/edit/${data._id}`);
                      }}
                      type={"button"}
                      variant={"solid"}
                      size={"small"}
                    />
                  </td>
                  <td>
                    {" "}
                    <ModalComponent
                      label={"Delete"}
                      body={"This action can not undone"}
                      isConfirmable={true}
                      isLoading={false}
                      showModal={true}
                      title={"Are you sure to delete?"}
                      onClick={() => onClickDelete(data._id)}
                    />{" "}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={7}>No Data to Show</td>
            </tr>
          )}
          <tr>
            <td colSpan={6}>Total salary</td>
            <td colSpan={3}>{totalSalary}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Users;

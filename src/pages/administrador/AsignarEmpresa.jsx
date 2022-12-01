import React, { Component ,useState} from "react";
import { Link } from "react-router-dom";
import conexionAxios from "../../config/axios";
import MUIDataTable from "mui-datatables";
import Button from "@material-ui/core/Button";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ModalAsignarEmpresa from "../administrador/ModalAsignarEmpresa"




const Client = (props) => (

  
  <>
      {/* <Link to={"client/edit/" + props.client._id} className="btn btn-primary">
        Edit
      </Link>
      &nbsp; */}


    <ModalAsignarEmpresa/>
  </>
);

export default class ClientsList extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { clients: [] };
  // }

  // componentDidMount() {
  //   conexionAxios.get("http://localhost:5000/clients/").then((response) => {
  //       this.setState({ clients: response.data });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }


// This is the map I was talking about:


 clientList() {
    // return this.state.clients.map((currentclient) => {
      return (
        <Client
          // client={currentclient}
          
          // key={currentclient._id}
        />
      );
    // });
  }

  render() {
    const columns = [
      {
        name: "name",
        label: "Name",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "address",
        label: "Address",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "mobile",
        label: "Mobile",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "email",
        label: "Email",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "gender",
        label: "Gender",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "birthday",
        label: "Birthday",
        options: {
          filter: true,
          sort: true,
        },
      },
    
      {
        name: "Action",
        options: {
          customBodyRender: () => {
            return <>{this.clientList()}</>;
          },
        },
      },
    ];
    // const { clients } = this.state;
    const data = [
      ["Gabby George", "Business Analyst", "Minneapolis", 30, 100000],
      ["Business Analyst", "Business Consultant", "Dallas", 55, 200000],
      ["Jaden Collins", "Attorney", "Santa Ana", 27, 500000],
      ["Franky Rees", "Business Analyst", "St. Petersburg", 22, 50000],
      ["Aaren Rose", "Business Consultant", "Toledo", 28, 75000],
      ["Blake Duncan", "Business Management Analyst", "San Diego", 65, 94000],
      ["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, 210000],
      ["Lane Wilson", "Commercial Specialist", "Omaha", 19, 65000],
      ["Robin Duncan", "Business Analyst", "Los Angeles", 20, 77000],
      ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, 135000],
      ["Harper White", "Attorney", "Pittsburgh", 52, 420000],
      ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, 150000],
      ["Frankie Long", "Industrial Analyst", "Austin", 31, 170000],
      ["Brynn Robbins", "Business Analyst", "Norfolk", 22, 90000],
      ["Justice Mann", "Business Consultant", "Chicago", 24, 133000],
      ["Addison Navarro", "Business Management Analyst", "New York", 50, 295000],
      ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, 200000],
      ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, 400000],
      ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, 110000],
      ["Danny Leon", "Computer Scientist", "Newark", 60, 220000],
      ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, 180000],
      ["Jesse Hall", "Business Analyst", "Baltimore", 44, 99000],
      ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, 90000],
      ["Terry Macdonald", "Commercial Specialist", "Miami", 39, 140000],
      ["Justice Mccarthy", "Attorney", "Tucson", 26, 330000],
      ["Silver Carey", "Computer Scientist", "Memphis", 47, 250000],
      ["Franky Miles", "Industrial Analyst", "Buffalo", 49, 190000],
      ["Glen Nixon", "Corporate Counselor", "Arlington", 44, 80000],
      [
        "Gabby Strickland",
        "Business Process Consultant",
        "Scottsdale",
        26,
        45000,
      ],
      ["Mason Ray", "Computer Scientist", "San Francisco", 39, 142000],
    ];
    return (
      <>
       
      
          <MUIDataTable data={data}  columns={columns} />
         
       
      </>
    );
  }
}



// import React, { useState } from "react";
// import MUIDataTable from "mui-datatables";
// import ModalAsignarEmpresa from "../administrador/ModalAsignarEmpresa"
// import Button from "@material-ui/core/Button";

// function AsignarEmpresa() {
  
//   const [responsive, setResponsive] = useState("standard");
//   const [tableBodyHeight, setTableBodyHeight] = useState("400px");
//   const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
//   const [transitionTime, setTransitionTime] = useState(300);
//   const [selectableRows, setSelectableRows] = useState("none");

//   const columns = [
//     {
//       name: "Nombre del estudiante",
//     },
//     {
//       name: "Empresa",
//     },
//     {
//       name: "Tutor",
//     },
//     {
//       name: "Editar",

//       options: {
//         customBodyRenderLite: (dataIndex, rowIndex) => {
//           return (
//             <Button >
//               <ModalAsignarEmpresa/>
//             </Button>
//           );
//         },
//       },
//     },
//   ];

//   const options = {
//     filter: true,
//     filterType: "dropdown",
//     responsive,
//     tableBodyHeight,
//     tableBodyMaxHeight,
//     draggableColumns: {
//       enabled: true,
//       transitionTime,
//     },
//     selectableRows: selectableRows,
//   };

//   const data = [
//     ["Gabby George", "Business Analyst", "Minneapolis", 30, 100000],
//     ["Business Analyst", "Business Consultant", "Dallas", 55, 200000],
//     ["Jaden Collins", "Attorney", "Santa Ana", 27, 500000],
//     ["Franky Rees", "Business Analyst", "St. Petersburg", 22, 50000],
//     ["Aaren Rose", "Business Consultant", "Toledo", 28, 75000],
//     ["Blake Duncan", "Business Management Analyst", "San Diego", 65, 94000],
//     ["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, 210000],
//     ["Lane Wilson", "Commercial Specialist", "Omaha", 19, 65000],
//     ["Robin Duncan", "Business Analyst", "Los Angeles", 20, 77000],
//     ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, 135000],
//     ["Harper White", "Attorney", "Pittsburgh", 52, 420000],
//     ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, 150000],
//     ["Frankie Long", "Industrial Analyst", "Austin", 31, 170000],
//     ["Brynn Robbins", "Business Analyst", "Norfolk", 22, 90000],
//     ["Justice Mann", "Business Consultant", "Chicago", 24, 133000],
//     ["Addison Navarro", "Business Management Analyst", "New York", 50, 295000],
//     ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, 200000],
//     ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, 400000],
//     ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, 110000],
//     ["Danny Leon", "Computer Scientist", "Newark", 60, 220000],
//     ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, 180000],
//     ["Jesse Hall", "Business Analyst", "Baltimore", 44, 99000],
//     ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, 90000],
//     ["Terry Macdonald", "Commercial Specialist", "Miami", 39, 140000],
//     ["Justice Mccarthy", "Attorney", "Tucson", 26, 330000],
//     ["Silver Carey", "Computer Scientist", "Memphis", 47, 250000],
//     ["Franky Miles", "Industrial Analyst", "Buffalo", 49, 190000],
//     ["Glen Nixon", "Corporate Counselor", "Arlington", 44, 80000],
//     [
//       "Gabby Strickland",
//       "Business Process Consultant",
//       "Scottsdale",
//       26,
//       45000,
//     ],
//     ["Mason Ray", "Computer Scientist", "San Francisco", 39, 142000],
//   ];

//   return (
//     <>
//       <MUIDataTable
//         title={"Asignar empresa"}
//         data={data}
//         columns={columns}
//         options={options}
//       />
//     </>
//   );
// }

// export default AsignarEmpresa;

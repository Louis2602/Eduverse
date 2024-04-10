import React from 'react';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Swal from 'sweetalert2';

// Icons
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';

import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  GridColDef,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
  DataGrid,
  GridActionsCellItem,
  GridToolbarExport,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector
} from '@mui/x-data-grid';

const initialRows: GridRowsProp = [
  { id: 1, name: 'Snow', email: 'snow@gmail.com', status: 'active' },
  { id: 2, name: 'Lannister', email: 'lannister@gmail.com', status: 'active' },
  { id: 3, name: 'John', email: 'john242@gmail.com', status: 'pending' },
  { id: 4, name: 'Stark', email: 'stark123@gmail.com', status: 'active' },
  { id: 5, name: 'Targaryen', email: 'targaryen111@gmail.com', status: 'disabled' },
  { id: 6, name: 'Melisandre', email: 'melimeli@gmail.com', status: 'active' },
  { id: 7, name: 'Clifford', email: 'clifford1010@gmail.com', status: 'pending' },
  { id: 8, name: 'Frances', email: 'frances12@gmail.com', status: 'active' },
  { id: 9, name: 'Roxie', email: 'roxie231@gmail.com', status: 'active' }
];

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (newModel: (oldModel: GridRowModesModel) => GridRowModesModel) => void;
}

function EditToolbar(props: EditToolbarProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport
          csvOptions={{
            utf8WithBom: true
          }}
        />
      </GridToolbarContainer>
    </Box>
  );
}
const MyGridBox = styled(Box)({
  height: 500,
  width: '100%',
  '& .actions': {
    color: 'text.secondary'
  },
  '& .textPrimary': {
    color: 'text.primary'
  },
  '& .MuiDataGrid-root': {
    borderColor: 'transparent'
  }
});

const StudentsTable = () => {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    Swal.fire({
      title: 'Bạn chắc chứ?',
      text: 'Bạn sẽ không thể hoàn lại tác vụ này!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa tài khoản',
      cancelButtonText: 'Hủy',
      reverseButtons: true
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire('Đã xóa!', 'Tài khoản đã được xóa thành công.', 'success');
        setTimeout(() => {
          setRows(rows.filter(row => row.id !== id));
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Thao tác đã được hủy bỏ!', 'error');
      }
    });
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true }
    });

    const editedRow = rows.find(row => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter(row => row.id !== id));
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map(row => (row.id === newRow.id ? updatedRow : row)));

    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'NAME', flex: 1, editable: true },
    {
      field: 'email',
      headerName: 'EMAIL',
      type: 'email',
      flex: 1,
      align: 'left',
      headerAlign: 'left',
      editable: true
    },
    {
      field: 'status',
      headerName: 'STATUS',
      flex: 1,
      editable: true,
      type: 'singleSelect',
      valueOptions: ['active', 'pending', 'disabled'],
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            px={2}
            py={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={1}
            sx={{
              backgroundColor: status === 'active' ? '#eaf9e0' : status === 'pending' ? '#fff6e0' : '#f1f1f2',
              borderRadius: 10
            }}
          >
            <Typography
              sx={{
                color: status === 'active' ? '#5acb06' : status === 'pending' ? '#ffbe20' : '#92959b',
                fontSize: 13
              }}
            >
              {status === 'active' ? 'Active' : status === 'pending' ? 'Pending' : 'Disabled'}
            </Typography>
          </Box>
        );
      }
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'ACTIONS',
      flex: 1,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <Tooltip title="Save" key={'save'}>
              <GridActionsCellItem
                icon={<SaveIcon />}
                label="Save"
                sx={{
                  color: 'primary.main'
                }}
                onClick={handleSaveClick(id)}
              />
            </Tooltip>,
            <Tooltip title="Close" key={'close'}>
              <GridActionsCellItem
                icon={<CloseIcon />}
                label="Cancel"
                className="textPrimary"
                onClick={handleCancelClick(id)}
                color="inherit"
              />
            </Tooltip>
          ];
        }

        return [
          <Tooltip title="Edit" key={'edit'}>
            <GridActionsCellItem
              icon={<CreateIcon />}
              label="Edit"
              className="textPrimary"
              onClick={handleEditClick(id)}
              color="inherit"
            />
          </Tooltip>,
          <Tooltip title="Delete" key={'delete'}>
            <GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={handleDeleteClick(id)} color="inherit" />
          </Tooltip>
        ];
      }
    }
  ];

  return (
    <MyGridBox>
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        pageSizeOptions={[5, 10, 25]}
        checkboxSelection
        slots={{
          toolbar: EditToolbar
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel }
        }}
      />
    </MyGridBox>
  );
};

export default StudentsTable;

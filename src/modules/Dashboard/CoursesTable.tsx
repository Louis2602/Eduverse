import React from 'react';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Swal from 'sweetalert2';

// Icons
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

import { GridColDef, GridRowId, DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { fetchAllCourses } from '@/services/course';
import { useAuth } from '@/common/context/AuthContext';
import { useSession } from 'next-auth/react';

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

const CoursesTable = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = React.useState(false);
  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    fetchAllCourses(session?.user.uid).then(courses => {
      setLoading(false);
      setCourses(courses);
    });
  }, []);

  const handleDeleteClick = (id: GridRowId) => () => {
    // Swal.fire({
    //   title: 'Bạn chắc chứ?',
    //   text: 'Bạn sẽ không thể hoàn lại tác vụ này!',
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonText: 'Xóa tài khoản',
    //   cancelButtonText: 'Hủy',
    //   reverseButtons: true
    // }).then(result => {
    //   if (result.isConfirmed) {
    //     Swal.fire('Đã xóa!', 'Khóa học đã được xóa thành công.', 'success');
    //     setTimeout(() => {
    //       setCourses(prevCourses?.filter(course => course?.id !== id));
    //     });
    //   } else if (result.dismiss === Swal.DismissReason.cancel) {
    //     Swal.fire('Cancelled', 'Thao tác đã được hủy bỏ!', 'error');
    //   }
    // });
  };

  const handleEditClick = (id: GridRowId) => () => {};

  const columns: GridColDef[] = [
    { field: 'courseName', headerName: 'NAME', flex: 1, editable: true },
    {
      field: 'currentPrice',
      headerName: 'CURRENT PRICE',
      type: 'text',
      flex: 1,
      align: 'left',
      headerAlign: 'left',
      editable: true
    },
    {
      field: 'language',
      headerName: 'LANGUAGE',
      flex: 1,
      editable: true
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'ACTIONS',
      flex: 1,
      cellClassName: 'actions',
      getActions: ({ id }) => {
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
      {courses?.length > 0 ? (
        <DataGrid rows={courses} columns={columns} pageSizeOptions={[5, 10, 25]} checkboxSelection loading={loading} />
      ) : (
        <p>Loading courses...</p>
      )}
    </MyGridBox>
  );
};

export default CoursesTable;

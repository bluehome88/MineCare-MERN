import { useEffect } from 'react';
import { paramCase } from 'change-case';
import { useParams, useLocation } from 'react-router-dom';
// material
import { Container } from '@mui/material';
// redux
import { useDispatch, useSelector } from '../../redux/store';
import { getEmployeeList } from '../../redux/slices/employee';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import EmployeeNewForm from '../../components/_dashboard/employee/EmployeeNewForm';

// ----------------------------------------------------------------------

export default function EmployeeCreate() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { name } = useParams();
  const { employeeList } = useSelector((state) => state.employee);
  const isEdit = pathname.includes('edit');
  const currentEmployee = employeeList.find((employee) => paramCase(employee.name) === name);

  useEffect(() => {
    dispatch(getEmployeeList());
  }, [dispatch]);

  return (
    <Page title="Employee: Create a new employee | Minimal-UI">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={!isEdit ? 'Create a new employee' : 'Edit employee'}
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Employee', href: PATH_DASHBOARD.employee.root },
            { name: !isEdit ? 'New employee' : name }
          ]}
        />

        <EmployeeNewForm isEdit={isEdit} currentEmployee={currentEmployee} />
      </Container>
    </Page>
  );
}

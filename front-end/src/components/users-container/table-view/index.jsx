import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from "react-redux";
import {loadUsers, updateUser} from "../../../actions/users-actions";
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { usersListSelector } from './selectors'


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function UsersTable({ currentUser }) {
  const { list, status } = useSelector(state => usersListSelector(state));
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'PRISTINE') {
      dispatch(loadUsers());
    }
  });
  const changePasswordForUser = id => {
    dispatch(updateUser({passwordChange: true }, id))
  }
  const changeActivityStatus = (id, isActive) => {
    dispatch(updateUser({ isActive }, id))
  }
  const changeRole = (id, role) => {
    dispatch(updateUser({ role }, id))
  }
  const classes = useStyles();

  return (
    <div>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Користувач</TableCell>
            <TableCell align="right">Логін</TableCell>
            <TableCell align="right">Електронна пошта</TableCell>
            <TableCell align="right">Створений</TableCell>
            <TableCell align="right">Модіфікований</TableCell>
            <TableCell align="right">Роль</TableCell>
            <TableCell align="right">Дективувати/Активувати</TableCell>
            <TableCell align="right">Новий пароль</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.fullName}
              </TableCell>
              <TableCell align="right">{row.login}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.createdAt}</TableCell>
              <TableCell align="right">{row.updatedAt}</TableCell>
              <TableCell align="right">
                <Select
                  disabled={currentUser.id === row.id}
                  id="role-select"
                  value={row.role}
                  onChange={event => changeRole(row.id, event.target.value)}
                >
                  <MenuItem value='ADMIN'>Адміністратор</MenuItem>
                  <MenuItem value='USER'>Звичайний</MenuItem>
                </Select>
              </TableCell>
              <TableCell align="right">
                <Switch
                  disabled={currentUser.id === row.id}
                  checked={row.isActive}
                  onChange={() => changeActivityStatus(row.id, !row.isActive)}
                  value="active"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </TableCell>
              <TableCell align="right">
                <Button
                  onClick={() => changePasswordForUser(row.id)}
                  variant="contained"
                  disabled={row.passwordChange || currentUser.id === row.id}
                  color="primary">!</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

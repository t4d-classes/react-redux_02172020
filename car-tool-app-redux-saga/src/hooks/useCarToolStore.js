import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from '../carToolMaps';

export const useCarToolStore = () => {

  const dispatch = useDispatch();

  const boundActionsProps = useCallback(mapDispatchToProps(dispatch), [dispatch]);

  return {...boundActionsProps, ...useSelector(mapStateToProps) };

};

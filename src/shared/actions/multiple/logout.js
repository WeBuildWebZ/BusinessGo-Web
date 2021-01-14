import { resetAdminSection } from '../adminSection';
import { resetClientModels } from '../clientModels';
import { resetProject } from '../project';
import { resetSelectedClientModel } from '../selectedClientModel';
import { resetUser } from '../user';

const logout = dispatch => {
  dispatch(resetAdminSection());
  dispatch(resetClientModels());
  dispatch(resetSelectedClientModel());
  dispatch(resetUser());
  dispatch(resetProject());
};

export default logout;

import { resetAdminSection } from '../adminSection';
import { resetClientModels } from '../clientModels';
import { resetProject } from '../project';
import { resetSelectedClientModel } from '../selectedClientModel';
import { resetSelectedForm } from '../selectedForm';
import { resetUser } from '../user';

const logout = dispatch => {
  dispatch(resetAdminSection());
  dispatch(resetClientModels());
  dispatch(resetSelectedClientModel());
  dispatch(resetUser());
  dispatch(resetProject());
  dispatch(resetSelectedForm());
};

export default logout;

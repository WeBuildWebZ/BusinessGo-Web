import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import Configuration from '../../../../../components/Configuration';
import { showProject } from '../../../../../services/api/project';
import { setProject } from '../../../../../actions/project';

const BlanqueriaWowProject = () => {
  const router = useRouter();
  const { project_id } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!project_id) return;

    showProject(project_id)
      .then(({ data: project }) => {
        dispatch(setProject(project));
      })
      .catch(() => {
        window.location.href = '/admin';
      });
  }, [project_id]);

  return <Configuration backgroundImage="/admin/background.jpg" title="Blanquería Wow - Admin" />;
};

export default BlanqueriaWowProject;

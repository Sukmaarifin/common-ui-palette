import React, { useContext, useEffect } from 'react';
import { TenantContext } from '../PriusSSSO';

const PriusTitle = () => {
  const { tenant } = useContext(TenantContext);

  const tenantName = tenant?.name ? tenant.name : 'SIRCLO';

  useEffect(() => {
    document.title = `${tenantName} - Admin Page`;
  }, [tenantName]);

  return <></>;
};

export default PriusTitle;

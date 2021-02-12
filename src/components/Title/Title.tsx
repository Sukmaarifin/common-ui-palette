import React, { useContext, useEffect } from 'react';
import { TenantContext } from '../SSSO';

const Title = () => {
  const { tenant } = useContext(TenantContext);

  const tenantName = tenant?.name ? tenant.name : 'SIRCLO';

  useEffect(() => {
    document.title = `${tenantName} - Admin Page`;
  }, [tenantName]);

  return <></>;
};

export default Title;

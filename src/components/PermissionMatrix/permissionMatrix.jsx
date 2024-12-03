import React from 'react';
import { usePermissionContext } from '../context/PermissionContext';

const PermissionMatrix = () => {
  const { permissions, addPermission, editPermission, deletePermission } =
    usePermissionContext();

  const handleAddPermission = () => {
    addPermission({ name: 'New Permission', description: 'Custom permission' });
  };

  return (
    <div>
      <h2>Permission Matrix</h2>
      <ul>
        {permissions.map((perm) => (
          <li key={perm.id}>
            {perm.name} - {perm.description}
            <button onClick={() => editPermission(perm.id, { name: 'Updated Permission' })}>
              Edit
            </button>
            <button onClick={() => deletePermission(perm.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddPermission}>Add Permission</button>
    </div>
  );
};

export default PermissionMatrix;

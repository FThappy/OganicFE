import { ReactNode } from 'react';

export enum Roles {
  none = 'none',
  admin = 'admin',
  superadmin = 'superadmin',
  user = 'user',
  readonly = 'readonly'
}

export interface RenderIfRoleProps {
  roles: Roles[];
  children: ReactNode;
}

export const RenderIfRole = ({ roles, children }: RenderIfRoleProps): ReactNode | null => {
  const role = 'admin';
  const providedRolesMatchUserRole = role && roles.includes(Roles[role]);

  if (providedRolesMatchUserRole) {
    return children;
  }
  return null;
};

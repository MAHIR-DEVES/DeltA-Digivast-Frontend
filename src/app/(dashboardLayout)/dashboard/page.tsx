'use client';

import { getStoredUser } from '@/utils/auth.utils';
import AdminDashboard from '../../../components/module/admin/AdminDashboard';
import ManagerDashboard from '../../../components/module/manager/ManagerDashboard';
import EmployDashboard from '../../../components/module/employ/EmployDashboard';
import { Roles } from '@/constants/roles';

export default function DashboardPage() {
  const user = getStoredUser();

  if (!user) return null;

  // Role-based rendering
  switch (user.role) {
    case Roles.admin:
      return <AdminDashboard />;
    case Roles.manager:
      return <ManagerDashboard />;
    default:
      return <EmployDashboard />;
  }
}

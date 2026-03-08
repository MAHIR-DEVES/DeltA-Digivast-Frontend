import {
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  BarChart3,
  Calendar,
  DollarSign,
  Mail,
  Briefcase,
  GraduationCap,
  ClipboardList,
} from 'lucide-react';

import { Roles } from '@/constants/roles';

export interface AppRoute {
  name: string;
  path: string;
  icon: React.ElementType;
}

export const dashboardRoutes: Record<string, AppRoute[]> = {
  [Roles.admin]: [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: LayoutDashboard,
    },

    {
      name: 'Portfolio Projects',
      path: '/dashboard/admin/portfolio-management',
      icon: Briefcase,
    },
    {
      name: 'Manage Blogs',
      path: '/dashboard/admin/blogs-management',
      icon: FileText,
    },
    {
      name: 'Courses',
      path: '/dashboard/admin/courses-management',
      icon: GraduationCap,
    },
    {
      name: 'Leads',
      path: '/dashboard/admin/leads-management',
      icon: Mail,
    },

    {
      name: 'Staff Management',
      path: '/dashboard/admin/staff-management',
      icon: Users,
    },
    {
      name: 'Attendance',
      path: '/dashboard/admin/attendance-management',
      icon: Calendar,
    },
    {
      name: 'Hero Management',
      path: '/dashboard/admin/hero-management',
      icon: FileText,
    },
    {
      name: 'My Profile',
      path: '/dashboard/admin/my-profile',
      icon: Users,
    },
  ],

  [Roles.manager]: [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      name: 'Attendance',
      path: '/dashboard/manager/attendance-management',
      icon: Calendar,
    },
    {
      name: 'My Profile',
      path: '/dashboard/manager/my-profile',
      icon: Users,
    },
  ],

  [Roles.employ]: [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: LayoutDashboard,
    },

    {
      name: 'My Attendance',
      path: '/dashboard/employ/my-attendance',
      icon: Calendar,
    },
    {
      name: 'My Profile',
      path: '/dashboard/employ/my-profile',
      icon: Users,
    },
  ],
};

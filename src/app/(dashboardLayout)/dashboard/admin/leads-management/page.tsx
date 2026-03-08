'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Search,
  Eye,
  Edit,
  Trash2,
  Mail,
  Phone,
  MoreVertical,
} from 'lucide-react';
import LeadViewModal from '@/components/module/admin/LeadViewModal';
import Loading from '@/components/module/shared/loading';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  from: string;
  status: 'new' | 'contacted' | 'qualified' | 'lost';
  source: 'website' | 'referral' | 'social' | 'campaign';
  date: string;
}

export default function LeadsManagement() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);
  const [viewLoading, setViewLoading] = useState(false);

  const API = process.env.NEXT_PUBLIC_BACKEND_URL;

  const getToken = () => {
    return (
      localStorage.getItem('accessToken') ||
      sessionStorage.getItem('accessToken')
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  // FETCH LEADS
  const fetchLeads = async () => {
    try {
      setLoading(true);

      const token = getToken();

      const res = await axios.get(`${API}/api/v1/leads`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setLeads(res.data.data || res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // SEARCH FILTER
  const filteredLeads = leads.filter(lead =>
    `${lead.name} ${lead.email} ${lead.company}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase()),
  );

  // VIEW LEAD
  const handleView = async (id: string) => {
    try {
      setViewLoading(true);

      const token = getToken();

      const res = await axios.get(`${API}/api/v1/leads/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSelectedLead(res.data.data || res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setViewLoading(false);
    }
  };

  // DELETE LEAD
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;

    try {
      const token = getToken();

      await axios.delete(`${API}/api/v1/leads/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchLeads();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Leads Management
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Total Leads: {leads.length}
        </p>
      </div>

      {/* Search */}
      <div className="mb-6 flex gap-4">
        <div className="flex-1 relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search by name, email, or company..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg
            bg-white dark:bg-gray-900
            border border-gray-300 dark:border-gray-700"
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white dark:bg-gray-900 rounded-md border overflow-hidden">
        {loading ? (
          <Loading></Loading>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                <th className="px-6 py-3 text-left font-semibold">Name</th>
                <th className="px-6 py-3 text-left font-semibold">Email</th>
                <th className="px-6 py-3 text-left font-semibold">Phone</th>
                <th className="px-6 py-3 text-left font-semibold">Address</th>
                <th className="px-6 py-3 text-left font-semibold">Message</th>
                <th className="px-6 py-3 text-left font-semibold">Date</th>
                <th className="px-6 py-3 text-right font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredLeads.map(lead => (
                <tr
                  key={lead.id}
                  className="border-b hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  {/* NAME */}
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {lead.name}
                  </td>

                  {/* EMAIL */}
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <Mail size={14} />
                      {lead.email}
                    </div>
                  </td>

                  {/* PHONE */}
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <Phone size={14} />
                      {lead.phone}
                    </div>
                  </td>

                  {/* ADDRESS */}
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    {lead.from}
                  </td>
                  {/* message */}
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    {lead.company}
                  </td>

                  {/* DATE */}
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    {formatDate(lead.date)}
                  </td>

                  {/* ACTIONS */}
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleView(lead.id)}
                        className="p-2 rounded-md hover:bg-blue-100 text-blue-600 transition"
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        onClick={() => handleDelete(lead.id)}
                        className="p-2 rounded-md hover:bg-red-100 text-red-600 transition"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {viewLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Loading Lead...
              </span>
            </div>
          </div>
        </div>
      )}
      {/* VIEW MODAL */}
      <LeadViewModal
        lead={selectedLead}
        onClose={() => setSelectedLead(null)}
      />
    </div>
  );
}

'use client';

import { getStoredUser } from '@/utils/auth.utils';
import { uploadImage } from '@/utils/uploadImage';
import Image from 'next/image';
import axios from 'axios';
import React, { useState } from 'react';
import {
  FiMail,
  FiPhone,
  FiCpu,
  FiCalendar,
  FiEdit2,
  FiSave,
  FiX,
  FiUpload,
  FiAward,
} from 'react-icons/fi';
import { toast } from 'sonner';

export default function MyProfile() {
  const storedUser = getStoredUser();

  const [user, setUser] = useState(storedUser);
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const [imageHover, setImageHover] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    skills: user?.skills || '',
    experience: user?.experience || 0,
    department: user?.department || '',
    designation: user?.designation || '',
    photoUrl: user?.photoUrl || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === 'experience' ? Number(value) : value,
    });
  };
  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    try {
      const url = await uploadImage(file);
      setFormData({ ...formData, photoUrl: url });
      setUser({ ...user, photoUrl: url });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleUpdate = async () => {
    try {
      setLoading(true);
      const token =
        localStorage.getItem('accessToken') ||
        sessionStorage.getItem('accessToken');
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/${user.id}`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      if (res.data.success) {
        setUser(res.data.data);
        localStorage.setItem('user', JSON.stringify(res.data.data));
        toast.success('Profile Successfully Updated  ');
        setEdit(false);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            My Profile
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage your personal information
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Cover Photo */}
          <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700"></div>

          {/* Profile Content */}
          <div className="px-8 pb-8">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div
                className="relative -mt-16"
                onMouseEnter={() => setImageHover(true)}
                onMouseLeave={() => setImageHover(false)}
              >
                <div className="relative w-32 h-32 rounded-full ring-4 ring-white dark:ring-gray-800 overflow-hidden bg-gray-100 dark:bg-gray-700">
                  {user?.photoUrl ? (
                    <Image
                      src={user.photoUrl}
                      width={128}
                      height={128}
                      alt="profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl text-gray-400 dark:text-gray-500">
                      {user?.name?.charAt(0) || 'U'}
                    </div>
                  )}
                  {edit && (
                    <div
                      className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-200 ${imageHover ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <label className="cursor-pointer">
                        <FiUpload className="w-6 h-6 text-white" />
                        <input
                          type="file"
                          onChange={handleImage}
                          className="hidden"
                          accept="image/*"
                        />
                      </label>
                    </div>
                  )}
                </div>
                {loading && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                      Uploading...
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Name and Title */}
            <div className="text-center mt-4">
              {edit ? (
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="text-2xl font-bold text-center w-full max-w-md mx-auto px-3 py-1 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {user?.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {user?.designation || 'No designation'}
                  </p>
                </>
              )}
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Email */}
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <FiMail className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Email
                  </span>
                </div>
                {edit ? (
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white ml-6">
                    {user?.email || 'Not provided'}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <FiPhone className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Phone
                  </span>
                </div>
                {edit ? (
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white ml-6">
                    {user?.phone || 'Not provided'}
                  </p>
                )}
              </div>

              {/* Department */}
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <FiCpu className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Department
                  </span>
                </div>
                {edit ? (
                  <input
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white ml-6">
                    {user?.department || 'Not provided'}
                  </p>
                )}
              </div>

              {/* Experience */}
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <FiCalendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Experience
                  </span>
                </div>
                {edit ? (
                  <input
                    name="experience"
                    type="number"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white ml-6">
                    {user?.experience
                      ? `${user.experience} ${user.experience === 1 ? 'Year' : 'Years'}`
                      : 'Not provided'}
                  </p>
                )}
              </div>
            </div>

            {/* Skills Section */}
            <div className="mt-8">
              <div className="flex items-center space-x-2 mb-3">
                <FiAward className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Skills
                </h3>
              </div>

              {edit ? (
                <input
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., JavaScript, React, Node.js"
                />
              ) : (
                <div className="flex flex-wrap gap-2">
                  {user?.skills ? (
                    user.skills
                      .split(',')
                      .map((skill: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {skill.trim()}
                        </span>
                      ))
                  ) : (
                    <p className="text-gray-500 dark:text-gray-400 italic">
                      No skills added
                    </p>
                  )}
                </div>
              )}
              {edit && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  Separate skills with commas
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              {edit ? (
                <>
                  <button
                    onClick={() => {
                      setEdit(false);
                      setFormData({
                        name: user?.name || '',
                        email: user?.email || '',
                        phone: user?.phone || '',
                        skills: user?.skills || '',
                        experience: user?.experience || 0,
                        department: user?.department || '',
                        designation: user?.designation || '',
                        photoUrl: user?.photoUrl || '',
                      });
                    }}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <FiX className="w-4 h-4" />
                    <span>Cancel</span>
                  </button>
                  <button
                    onClick={handleUpdate}
                    disabled={loading}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Saving...</span>
                      </>
                    ) : (
                      <>
                        <FiSave className="w-4 h-4" />
                        <span>Save Changes</span>
                      </>
                    )}
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setEdit(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                >
                  <FiEdit2 className="w-4 h-4" />
                  <span>Edit Profile</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

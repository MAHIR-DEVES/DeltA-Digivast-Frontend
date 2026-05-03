/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { userService } from '@/service/user.service';
import { getStoredUser } from '@/utils/auth.utils';
import { useRouter } from 'next/navigation';
import {
  Loader2,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { toast, Toaster } from 'sonner';

interface LoginProps {
  onLogin?: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const router = useRouter();
  const user = getStoredUser();

  // ✅ Demo Users
  const demoUsers = {
    admin: {
      email: 'admin@gmail.com',
      password: '12345678',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50 dark:bg-red-950/20',
      borderColor: 'border-red-200 dark:border-red-800',
    },
    manager: {
      email: 'manager@gmail.com',
      password: '12345678',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
    },
    employee: {
      email: 'employ@gmail.com',
      password: '12345678',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/20',
      borderColor: 'border-emerald-200 dark:border-emerald-800',
    },
  };

  // ✅ Select demo only (NO LOGIN HERE)
  const handleDemoSelect = (role: 'admin' | 'manager' | 'employee') => {
    const { email, password } = demoUsers[role];

    setEmail(email);
    setPassword(password);
    setSelectedRole(role);
    setError('');

    toast.success(
      `${role.charAt(0).toUpperCase() + role.slice(1)} account selected!`,
    );
  };

  // ✅ Normal Login (works for both demo + manual)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      setLoading(true);

      const { accessToken, user } = await userService.login(email, password);

      if (rememberMe) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        sessionStorage.setItem('accessToken', accessToken);
        sessionStorage.setItem('user', JSON.stringify(user));
      }

      toast.success('Login successful!');
      router.replace('/dashboard');
    } catch (err: any) {
      console.error(err);
      setError('Invalid email or password. Please try again.');
      toast.error('Login failed! Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const demoButtonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#6efd0b]/15 to-[#4fd100]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-500/10 to-blue-500/5 rounded-full blur-3xl"
        />
      </div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-xl z-10"
      >
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-2xl rounded-md shadow-2xl p-8 space-y-8 border border-white/20 dark:border-slate-700/50">
          {/* Logo & Title Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-3"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold text-slate-900 dark:text-white"
            >
              Welcome Back
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-slate-600 dark:text-slate-400"
            >
              Sign in to access your Delta Digivast dashboard
            </motion.p>

            {selectedRole && (
              <motion.div
                variants={itemVariants}
                className={`inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg ${demoUsers[selectedRole as keyof typeof demoUsers].bgColor} border ${demoUsers[selectedRole as keyof typeof demoUsers].borderColor}`}
              >
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}{' '}
                  mode selected
                </span>
              </motion.div>
            )}
          </motion.div>

          {/* Demo Selection */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-3"
          >
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide px-1">
              Quick Demo Access
            </p>
            <div className="grid grid-cols-3 gap-3">
              {(['admin', 'manager', 'employee'] as const).map(role => (
                <motion.button
                  key={role}
                  onClick={() => handleDemoSelect(role)}
                  className={`relative py-3 px-2 rounded-xl font-medium text-sm transition-all duration-300 border-2 ${
                    selectedRole === role
                      ? `border-current bg-gradient-to-r ${demoUsers[role].color} text-white shadow-lg shadow-${demoUsers[role].color}/50`
                      : `border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-current hover:bg-slate-50 dark:hover:bg-slate-700/50`
                  }`}
                  variants={demoButtonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {role === 'admin' && '👨‍💼'}
                  {role === 'manager' && '📊'}
                  {role === 'employee' && '👥'}
                  <span className="ml-1">
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-700" />
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Or
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-slate-200 to-transparent dark:from-slate-700" />
          </motion.div>

          {/* Error Alert */}
          {error && (
            <motion.div
              variants={itemVariants}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-3 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl"
            >
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
            </motion.div>
          )}

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {/* Email Input */}
            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500 pointer-events-none" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 rounded-xl focus:outline-none focus:border-[#6efd0b] dark:focus:border-[#6efd0b] transition-colors text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
                  required
                />
              </div>
            </motion.div>

            {/* Password Input */}
            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500 pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 border-2 border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 rounded-xl focus:outline-none focus:border-[#6efd0b] dark:focus:border-[#6efd0b] transition-colors text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </motion.div>

            {/* Remember Me & Forgot Password */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-between"
            >
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={e => setRememberMe(e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 rounded-lg border-2 border-slate-200 dark:border-slate-700 transition-all ${rememberMe ? 'bg-gradient-to-br from-[#6efd0b] to-[#4fd100] border-[#6efd0b]' : ''}`}
                  />
                  {rememberMe && (
                    <CheckCircle2 className="absolute inset-0 w-5 h-5 text-white pointer-events-none" />
                  )}
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300">
                  Remember me
                </span>
              </label>
            </motion.div>

            {/* Sign In Button */}
            <motion.button
              variants={itemVariants}
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              className="w-full bg-gradient-to-r from-[#6efd0b] to-[#4fd100] text-slate-900 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#6efd0b]/25 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading && <Loader2 className="animate-spin w-5 h-5" />}
              {loading ? 'Signing In...' : 'Sign In'}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>

      <Toaster position="top-right" richColors closeButton />
    </div>
  );
};

export default Login;

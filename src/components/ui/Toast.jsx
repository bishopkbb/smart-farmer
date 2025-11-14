import toast, { Toaster } from 'react-hot-toast';

// Custom toast functions with our brand colors
export const showToast = {
  success: (message) => toast.success(message, {
    duration: 3000,
    position: 'top-center',
    style: {
      background: '#10b981',
      color: '#fff',
      padding: '16px',
      borderRadius: '12px',
      fontWeight: '600',
    },
    iconTheme: {
      primary: '#fff',
      secondary: '#10b981',
    },
  }),
  
  error: (message) => toast.error(message, {
    duration: 4000,
    position: 'top-center',
    style: {
      background: '#ef4444',
      color: '#fff',
      padding: '16px',
      borderRadius: '12px',
      fontWeight: '600',
    },
    iconTheme: {
      primary: '#fff',
      secondary: '#ef4444',
    },
  }),
  
  loading: (message) => toast.loading(message, {
    position: 'top-center',
    style: {
      padding: '16px',
      borderRadius: '12px',
      fontWeight: '600',
    },
  }),
  
  info: (message) => toast(message, {
    duration: 3000,
    position: 'top-center',
    icon: 'ℹ️',
    style: {
      background: '#3b82f6',
      color: '#fff',
      padding: '16px',
      borderRadius: '12px',
      fontWeight: '600',
    },
  }),

  promise: (promise, messages) => toast.promise(
    promise,
    {
      loading: messages.loading || 'Loading...',
      success: messages.success || 'Success!',
      error: messages.error || 'Error occurred',
    },
    {
      style: {
        padding: '16px',
        borderRadius: '12px',
        fontWeight: '600',
      },
      success: {
        style: {
          background: '#10b981',
          color: '#fff',
        },
      },
      error: {
        style: {
          background: '#ef4444',
          color: '#fff',
        },
      },
    }
  ),
};

// Export the Toaster component to be added to App
export default Toaster;
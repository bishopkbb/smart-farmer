import React from 'react';
import Joyride, { STATUS } from 'react-joyride';

const OnboardingTour = ({ run, onFinish }) => {
  const steps = [
    {
      target: '.weather-card',
      content: 'Check today\'s weather to plan your farming activities. Updates automatically when online! ☀️',
      placement: 'bottom',
      disableBeacon: true,
    },
    {
      target: '.quick-actions',
      content: 'Quick access to all your farming tools - Crop Guide, Calendar, Tracker, and Pest Solutions! 🌱',
      placement: 'bottom',
    },
    {
      target: '.crop-guide-btn',
      content: 'Browse 20+ Nigerian crops with detailed planting information, soil types, and yields 📚',
      placement: 'top',
    },
    {
      target: '.calendar-btn',
      content: 'See exactly when to plant each crop based on the month and your region 📅',
      placement: 'top',
    },
    {
      target: '.tracker-btn',
      content: 'Track your crops from planting to harvest. Never miss important tasks! 📊',
      placement: 'top',
    },
    {
      target: '.pest-btn',
      content: 'Get instant pest and disease solutions. Select your crop and symptom for expert advice 🐛',
      placement: 'top',
    },
    {
      target: '.notification-btn',
      content: 'Get reminders for weeding, fertilizing, and harvesting your crops 🔔',
      placement: 'bottom',
    },
    {
      target: '.settings-btn',
      content: 'Customize your experience - change region, language, or enable dark mode ⚙️',
      placement: 'bottom',
    },
  ];

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      onFinish();
    }
  };

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous
      showProgress
      showSkipButton
      callback={handleJoyrideCallback}
      styles={{
        options: {
          primaryColor: '#10b981',
          textColor: '#374151',
          backgroundColor: '#ffffff',
          overlayColor: 'rgba(0, 0, 0, 0.5)',
          arrowColor: '#ffffff',
          zIndex: 10000,
        },
        tooltip: {
          borderRadius: 16,
          padding: 20,
        },
        tooltipContainer: {
          textAlign: 'left',
        },
        tooltipTitle: {
          fontSize: '1.25rem',
          fontWeight: 'bold',
          marginBottom: 10,
        },
        tooltipContent: {
          fontSize: '1rem',
          lineHeight: 1.6,
          padding: '10px 0',
        },
        buttonNext: {
          backgroundColor: '#10b981',
          borderRadius: 8,
          padding: '8px 16px',
          fontSize: '0.95rem',
          fontWeight: 600,
        },
        buttonBack: {
          color: '#6b7280',
          marginRight: 10,
        },
        buttonSkip: {
          color: '#9ca3af',
        },
      }}
      locale={{
        back: 'Back',
        close: 'Close',
        last: 'Done',
        next: 'Next',
        skip: 'Skip Tour',
      }}
    />
  );
};

export default OnboardingTour;
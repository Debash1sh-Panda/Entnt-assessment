import React from 'react';

const Dashboard = () => {
  // Simulated key metrics or features data
  const keyMetrics = [
    { label: 'Total Products', value: 150 },
    { label: 'Total Orders', value: 75 },
    { label: 'Revenue', value: '$10,000' },
    // Add more metrics as needed
  ];

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        {keyMetrics.map((metric, index) => (
          <div key={index}>
            <strong>{metric.label}:</strong> {metric.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

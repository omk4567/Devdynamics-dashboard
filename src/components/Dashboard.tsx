import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface Activity {
  type: string;
  timestamp: string;
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<Activity[]>([]);
  const [filteredData, setFilteredData] = useState<Activity[]>([]);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    axios.get('/data.json')
      .then(response => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setFilter(value);
    if (value === 'all') {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter(activity => activity.type === value));
    }
  };

  const chartData = filteredData.map(activity => ({
    ...activity,
    timestamp: new Date(activity.timestamp).toLocaleTimeString(),
  }));

  return (
    <div>
      <h1>Developer Activity Dashboard</h1>
      <div>
        <label>Filter by activity type:</label>
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="commit">Commit</option>
          <option value="pull_request_opened">Pull Request Opened</option>
          <option value="merge_pull_request">Merge Pull Request</option>
          <option value="meeting">Meeting</option>
          <option value="documentation">Documentation</option>
        </select>
      </div>
      <LineChart
        width={600}
        height={300}
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="type" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default Dashboard;



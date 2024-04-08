// FetchDataComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchDataComponent = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Fetched Data</h2>
      {error && <div>Error: {error}</div>}
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchDataComponent;

// EventSubscriptionComponent.js
import React, { useEffect } from 'react';

const EventSubscriptionComponent = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      console.log('Mouse X:', event.clientX);
      console.log('Mouse Y:', event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div>Check console for mouse coordinates</div>;
};

export default EventSubscriptionComponent;

// UpdateDocumentTitleComponent.js
import React, { useEffect } from 'react';

const UpdateDocumentTitleComponent = () => {
  useEffect(() => {
    document.title = 'New Document Title';

    // Cleanup function to reset document title
    return () => {
      document.title = 'Original Document Title';
    };
  }, []);

  return <div>This component updates the document title</div>;
};

export default UpdateDocumentTitleComponent;

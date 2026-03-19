import React from 'react';
import Text from '../atoms/Text';
import Surface from '../atoms/Surface';

const CarDataTester = ({ carData = [] }) => {
  return (
    <div style={{ padding: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <Text size="5" weight="700">Live EV Database Check</Text>
      
      {carData.length > 0 ? (
        carData.map((car: any) => (
          <Surface 
            key={car.id} 
            variant="base" 
            style={{ 
              padding: 'var(--space-4)', 
              borderLeft: '4px solid var(--action-mid)',
              display: 'flex',
              justifyContent: 'space-between' 
            }}
          >
            <div>
              <Text weight="700">{car.Brand} {car.Model}</Text>
              <Text size="1" color="muted">{car.Variant} | {car.Segment}</Text>
            </div>
            <div style={{ textAlign: 'right' }}>
              <Text color="primary" weight="600">₹{car.Approx_Price_Range_INR}</Text>
              <Text size="1" color="muted">Range: {car.Claimed_Range_km}km</Text>
            </div>
          </Surface>
        ))
      ) : (
        <Text color="muted">No data found or connection pending...</Text>
      )}
    </div>
  );
};

export default CarDataTester;
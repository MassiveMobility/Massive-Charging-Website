import React, { useState } from 'react';

/* Import Atoms */
import Container from '../atoms/Container';
import Text from '../atoms/Text';
import Surface from '../atoms/Surface';

const HowToChargeCard = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const guideSteps = [
    { id: 1, color: 'var(--action-min)', title: 'Identify Charging Requirements', desc: 'Find out Vehicle Name, Charging Port, Charging Gun, Required Power in kW, Battery Size, and other requirements like fast charge-slow charge, public charge etc' },
    { id: 2, color: 'var(--action-mid)', title: 'Choose Right Charging Toolkit', desc: 'Based on req you probably need Charging Socket, Charger, App to control, Charging Station Access' },
    { id: 3, color: 'var(--action-mid)', title: 'Setup Charging Infra', desc: 'Set up your charging infrastruture at home, office, etc. Ensure safety, wiring, and cost optimization' },
    { id: 4, color: 'var(--action-glow)', title: 'Enjoy Charging', desc: 'Go from 0 to 100 in hours; Save fuel cost and enviornment; stay charged upon waking up' },
    { id: 5, color: 'var(--action-glow)', title: 'Finetune & Optimize', desc: 'Enhance your charging experience. Use app and energy reading to monitor your charging expenditure, electricity and energy use, etc.' },
    { id: 6, color: 'var(--action-glow)', title: 'Scale and Expand', desc: 'Setting up charging station can be beneficial to you' }
  ];

  return (
    <div style={{ paddingBlock: 'var(--space-10)' }}>
      <Container>
  {/* [1] MASTER GRID BOUNDARY: Wraps Row 01 and Row 02 */}
  <div style={{ 
    /* [NEW] Vertical margin to prevent crowding */
    marginBlock: 'var(--space-4)', 
    border: '1px solid var(--stroke-subtle)', 
    borderRadius: 'var(--radius-3)',
    overflow: 'hidden',
    backgroundColor: 'var(--surface-card)', // Shaded Background
  }}>
          
          {/* ROW 01: Center Aligned Header */}
          <div style={{ 
            paddingBlock: 'var(--space-2)', 
            borderBottom: '1px solid var(--stroke-subtle)',
            textAlign: 'center',
            backgroundColor: 'var(--surface-card)', 
          }}>
            <Text size="7" weight="400" tag="h1">How to Charge Your EV?</Text>
          </div>

          {/* ROW 02: Content Grid (2fr 1fr Split) */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '2fr 1fr',
            minHeight: '400px', // Fixed Height Parity
          }}>
            
            {/* COLUMN 01: Compact Cards Group (Left - 2fr) */}
<div style={{ 
  padding: 'var(--space-4)', 
  borderRight: '1px solid var(--stroke-subtle)',
  backgroundColor: 'var(--surface-card)',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 'var(--space-6)',
  alignContent: 'center' 
}}>
  {guideSteps.map((step) => (
    <div 
      key={step.id} 
      onMouseEnter={() => setHoveredStep(step)}
      onMouseLeave={() => setHoveredStep(null)}
      style={{ cursor: 'pointer' }}
    >
      <Surface 
        variant="base"
        style={{ 
          padding: 'var(--space-3) var(--space-4)',
          borderLeft: `4px solid ${step.color}`,
          boxShadow: hoveredStep?.id === step.id ? 'var(--shadow-high)' : 'var(--shadow-low)',
          borderRadius: '0 var(--radius-2) var(--radius-2) 0',
          minHeight: '80px',
          /* [1] Flex aligned left */
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 'var(--space-3)',
          backgroundColor: 'var(--surface-base)',
          transform: hoveredStep?.id === step.id ? 'translateY(-4px)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        {/* [2] Number inside the card, inheriting border color */}
        <span style={{
          fontSize: 'var(--text-4)',
          fontWeight: '900',
          color: step.color, // Matches card border
          fontFamily: 'var(--font-mono)',
          opacity: hoveredStep?.id === step.id ? 1 : 0.6,
          transition: 'opacity 0.3s ease'
        }}>
          0{step.id}
        </span>

        <Text size="2" weight="700" style={{ textAlign: 'left' }}>
          {step.title}
        </Text>
      </Surface>
    </div>
  ))}
</div>

            {/* COLUMN 02: Dynamic Details (Right - 1fr) */}
            <div style={{ 
              padding: 'var(--space-6)', 
              backgroundColor: 'var(--surface-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              {hoveredStep ? (
                <Surface 
                  key={hoveredStep.id}
                  variant="base"
                  style={{ 
                    padding: 'var(--space-6)',
                    borderBottom: `8px solid ${hoveredStep.color}`,
                    boxShadow: 'var(--shadow-high)',
                    borderRadius: 'var(--radius-3)',
                    aspectRatio: '1/1', // Square Card
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: 'var(--space-3)',
                    backgroundColor: 'var(--surface-base)',
                    animation: 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards'
                  }}
                >
                  <Text size="1" weight="700" color="muted" style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>
                    STEP 0{hoveredStep.id}
                  </Text>
                  <Text size="4" weight="900">{hoveredStep.title}</Text>
                  <Text size="2" color="muted">{hoveredStep.desc}</Text>
                </Surface>
              ) : (
                <div style={{ 
                  aspectRatio: '1/1', 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: 'var(--space-6)',
                  border: '1px dashed var(--stroke-subtle)',
                  borderRadius: 'var(--radius-3)'
                }}>
                  <Text size="2" color="muted">Hover a step on the left to reveal telemetry data.</Text>
                </div>
              )}
            </div>

          </div>
        </div>
      </Container>

      <style>{`
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.98) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default HowToChargeCard;
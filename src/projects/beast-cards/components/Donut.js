import { ResponsivePie } from '@nivo/pie';
import { useEffect, useState } from 'react';

const data = [
  {
    id: 'Public Sale',
    label: 'Public Sale',
    value: 70,
    color: 'hsl(313, 70%, 50%)'
  },
  {
    id: 'Green Energy projects',
    label: 'Green Energy projects',
    value: 10,
    color: 'hsl(274, 70%, 50%)'
  },
  {
    id: 'Founders & Team (Lock Up)',
    label: 'Founders & Team (Lock Up)',
    value: 10,
    color: 'hsl(275, 70%, 50%)'
  },
  {
    id: 'Rewards & Ecosystem',
    label: 'Rewards & Ecosystem',
    value: 5,
    color: 'hsl(246, 70%, 50%)'
  },
  {
    id: 'Advisors and Partnership',
    label: 'Advisors and Partnership',
    value: 5,
    color: 'hsl(181, 70%, 50%)'
  }
];

const DonutComponent = () => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
      from: 'color',
      modifiers: [['darker', 0.2]]
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: 'color',
      modifiers: [['darker', 2]]
    }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        size: 4,
        padding: 1,
        stagger: true
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        rotation: -45,
        lineWidth: 6,
        spacing: 10
      }
    ]}
    fill={[
      {
        match: {
          id: 'Public Sale'
        },
        id: 'lines'
      },
      {
        match: {
          id: 'Founders & Team (Lock Up)'
        },
        id: 'lines'
      },
      {
        match: {
          id: 'Advisors and Partnership'
        },
        id: 'lines'
      }
    ]}
    legends={[
      {
        anchor: 'bottom',
        direction: 'row',
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: '#999',
        itemDirection: 'left-to-right',
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000'
            }
          }
        ]
      }
    ]}
  />
);

const Donut = () => {
  const isClient = typeof window === 'object';
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (isClient && !render) {
      setRender(true);
    }
  }, [render, isClient]);

  return (
    <div className="donut">
      {render && <DonutComponent />}

      <style jsx>
        {`
          .donut {
            width: 100%;
            height: 500px;
          }
        `}
      </style>
    </div>
  );
};

export default Donut;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { ResponsiveChoropleth } from '@nivo/geo'
import { useTheme} from '@mui/material';
import { token } from '../theme';
import { mockGeographyData as data } from '../data/mockdata';
import { geoFeatures } from '../data/mockgeo';


export default function GeoChart({isDashboard=false}) {

    const theme= useTheme()
    const color= token(theme.palette.mode)
   
  return (
   
    <ResponsiveChoropleth
    data={data}
    features={geoFeatures.features}
    theme={{

        tooltip: {
            container: {
                
                background: "black",
                fontSize: 12
            }
        }
    }}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    
    domain={[ 0, 1000000 ]}
    unknownColor="#666666"
    label="properties.name"
    valueFormat=".2s"
    projectionScale={isDashboard?30:120}
    projectionTranslation={isDashboard?[0.49,0.6]:[ 0.5, 0.5 ]}
    projectionRotation={[ 0, 0, 0 ]} 
    graticuleLineColor="#dddddd"
    borderWidth={0.5}
    borderColor="#fff"
   
    fill={[
        {
            match: {
                id: 'CAN'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'CHN'
            },
            id: 'lines'
        },
        {
            match: {
                id: 'ATA'
            },
            id: 'gradient'
        }
    ]}
    legends={
        
        
       !isDashboard? [
        {
            anchor: 'bottom-left',
            direction: 'column',
            justify: true,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: 'left-to-right',
            itemTextColor: `${color.blue[100]}`,
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemTextColor: '#000000',
                        itemOpacity: 1
                    }
                }
            ]
        }
    ]:undefined}
/>
    
  )
}

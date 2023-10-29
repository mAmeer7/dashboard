/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { ResponsivePie } from '@nivo/pie';
import { mockPieData  as data} from '../data/mockdata';
import { useTheme} from '@mui/material';
import { token } from '../theme';

export default function PieChart({isDashboard=false}) {

    const theme= useTheme()
    const color= token(theme.palette.mode)
  return (
    <ResponsivePie
        data={data}
        theme={{
            axis:{
                domain:{
                    line:{
                        stroke: color.blue[100]
                    }
                },
                legend:{
                    text:{
                        fill:color.blue[100]
                    }
                },ticks:{
                    text:{
                        fill:color.blue[100]
                    }
                }
            },
            legends:{
                text:{
                    fill:color.blue[100]
                }
            },
            tooltip: {
                container: {
                    
                    background: "black",
                    fontSize: 12
                }
            }
            
        }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeInnerRadiusOffset={5}
        activeOuterRadiusOffset={5}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={color.blue[100]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        legends={  isDashboard? undefined:  
            
            [
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
  )
}

import * as React from 'react';
import { ParentSize } from '@visx/responsive';
import { LinePath } from '@visx/shape';
import { GridColumns, GridRows } from '@visx/grid';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { leftTickLabelProps } from '@visx/axis/lib/axis/AxisLeft';
import { bottomTickLabelProps } from '@visx/axis/lib/axis/AxisBottom';
import { scaleLinear } from '@visx/scale';
import { getMinMax } from '../../lib/utils';

type Props = {
  values?: number[];
};

type PropsInternal = {
  width: number;
  height: number;
} & Props;

const margin = { top: 20, right: 20, bottom: 20, left: 30 };

const NodeSimulationGraphInternal: React.FC<PropsInternal> = ({
  width,
  height,
  values,
}) => {
  const { X, Y, xDomain, yDomain } = React.useMemo(() => {
    if (values) {
      return {
        X: Array.from(Array(values.length)).map((_, i) => i),
        Y: values,
        xDomain: [0, 8759],
        yDomain: getMinMax(values),
      };
    } else {
      return {
        X: [],
        Y: [],
        xDomain: [0, 8759],
        yDomain: [0, 90],
      };
    }
  }, [values]);

  const data = React.useMemo(() => {
    const ret = [];
    for (let i = 0; i < X.length; ++i) {
      ret.push({ x: X[i], y: Y[i] });
    }
    return ret;
  }, [X, Y]);

  const xScale = scaleLinear({
    range: [margin.left, width - margin.right],
    domain: xDomain,
  });

  const yScale = scaleLinear({
    range: [height - margin.bottom, margin.top],
    domain: yDomain,
  });

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  return (
    <svg width={width} height={height}>
      <GridRows
        scale={yScale}
        left={margin.left}
        width={innerWidth}
        strokeOpacity={0.1}
      />
      <GridColumns
        scale={xScale}
        top={margin.top}
        height={innerHeight}
        strokeOpacity={0.1}
      />
      <AxisLeft
        scale={yScale}
        left={margin.left}
        numTicks={4}
        stroke={'white'}
        tickStroke={'white'}
        tickLabelProps={() => ({ ...leftTickLabelProps(), fill: 'white' })}
      />
      <AxisBottom
        scale={xScale}
        top={height - margin.bottom}
        numTicks={8}
        stroke={'white'}
        tickStroke={'white'}
        tickLabelProps={() => ({ ...bottomTickLabelProps(), fill: 'white' })}
      />
      <LinePath
        data={data}
        stroke="#1EB854"
        strokeWidth={2}
        strokeLinejoin="round"
        strokeLinecap="round"
        x={(d) => xScale(d.x)}
        y={(d) => yScale(d.y)}
      />
    </svg>
  );
};

const NodeSimulationGraph: React.FC<Props> = (props) => {
  return (
    <ParentSize debounceTime={0}>
      {({ width, height }) => {
        return (
          <NodeSimulationGraphInternal
            width={width}
            height={height}
            {...props}
          />
        );
      }}
    </ParentSize>
  );
};

export default NodeSimulationGraph;

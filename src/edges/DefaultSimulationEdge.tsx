import * as React from 'react';
import clsx from 'clsx';
import { EdgeText, getBezierPath, type EdgeProps } from 'reactflow';
import type { SimulationEdgeData } from '../models';

const buttonSize = 32;

const DefaultSimulationEdge: React.FC<EdgeProps<SimulationEdgeData>> = ({
  id,
  data,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerStart,
  markerEnd,
  label,
  labelStyle,
  labelShowBg,
  labelBgStyle,
  labelBgPadding,
  labelBgBorderRadius,
}) => {
  const onEdgeClick = React.useCallback((evt: React.MouseEvent, id: string) => {
    evt.stopPropagation();
    alert(`remove ${id}`);
  }, []);

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <path
        d={edgePath}
        fill="none"
        strokeWidth={20}
        style={{ strokeDasharray: 0 }}
      />
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerStart={markerStart}
        markerEnd={markerEnd}
      />
      {data?.isMouseHover && (
        <foreignObject
          width={buttonSize}
          height={buttonSize}
          x={labelX - buttonSize / 2}
          y={labelY - buttonSize / 2}
          requiredExtensions="http://www.w3.org/1999/xhtml"
        >
          <div
            className={clsx(
              'w-full',
              'h-full',
              'flex',
              'flex-col',
              'justify-center',
              'items-center'
            )}
          >
            <div>
              <button
                className={clsx(
                  'btn',
                  'btn-xs',
                  'btn-circle',
                  'btn-outline',
                  'bg-base-300',
                  'border-none'
                )}
                onClick={(event) => onEdgeClick(event, id)}
              >
                ×
              </button>
            </div>
          </div>
        </foreignObject>
      )}
      {label && !data?.isMouseHover ? (
        <EdgeText
          x={labelX}
          y={labelY}
          label={label}
          labelStyle={labelStyle}
          labelShowBg={labelShowBg}
          labelBgStyle={labelBgStyle}
          labelBgPadding={labelBgPadding}
          labelBgBorderRadius={labelBgBorderRadius}
        />
      ) : null}
    </>
  );
};

export default DefaultSimulationEdge;

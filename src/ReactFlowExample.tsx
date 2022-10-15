import * as React from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  type OnNodesChange,
  type OnEdgesChange,
  type OnConnect,
  type OnMove,
  type Edge,
} from 'reactflow';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleConnectionChange,
  handleEdgeHover,
  handleEdgesChange,
  handleMove,
  handleNodesChange,
  selectReactFlowEdges,
  selectReactFlowNodes,
} from './ducks/react-flow';
import {
  InputParameterNode,
  TimeInputParameterNode,
  TimeVariableNode,
  VariableNode,
} from './nodes';
import 'reactflow/dist/style.css';
import './reactflow.css';
import { type AppDispatch } from './store';
import { DefaultSimulationEdge } from './edges';

const ReactFlowExample: React.FC = () => {
  const nodes = useSelector(selectReactFlowNodes);
  const edges = useSelector(selectReactFlowEdges);
  const dispatch: AppDispatch = useDispatch();

  const nodeTypes = React.useMemo(
    () => ({
      inputParameterNode: InputParameterNode,
      timeInputParameterNode: TimeInputParameterNode,
      timeVariableNode: TimeVariableNode,
      variableNode: VariableNode,
    }),
    []
  );

  const edgeTypes = React.useMemo(
    () => ({
      defaultEdge: DefaultSimulationEdge,
    }),
    []
  );

  const onNodesChange = React.useCallback<OnNodesChange>(
    (changes) => {
      dispatch(handleNodesChange({ changes }));
    },
    [dispatch]
  );
  const onEdgesChange = React.useCallback<OnEdgesChange>(
    (changes) => {
      dispatch(handleEdgesChange({ changes }));
    },
    [dispatch]
  );
  const onConnect = React.useCallback<OnConnect>(
    (connection) => {
      dispatch(handleConnectionChange({ connection }));
    },
    [dispatch]
  );
  const onMove = React.useCallback<OnMove>(
    (_, viewport) => {
      dispatch(handleMove({ viewport }));
    },
    [dispatch]
  );
  const onEdgeMouseEnter = React.useCallback(
    (_: React.MouseEvent, edge: Edge) => {
      dispatch(handleEdgeHover({ edgeId: edge.id, hover: true }));
    },
    [dispatch]
  );
  const onEdgeMouseLeave = React.useCallback(
    (_: React.MouseEvent, edge: Edge) => {
      dispatch(handleEdgeHover({ edgeId: edge.id, hover: false }));
    },
    [dispatch]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      onMove={onMove}
      onEdgeMouseEnter={onEdgeMouseEnter}
      onEdgeMouseLeave={onEdgeMouseLeave}
      deleteKeyCode={null}
      selectionKeyCode={null}
      multiSelectionKeyCode={null}
      zoomActivationKeyCode={null}
      fitView
    >
      <MiniMap
        nodeColor={() => {
          return 'hsl(var(--bc))';
        }}
      />
      <Controls />
      <Background />
    </ReactFlow>
  );
};

export default ReactFlowExample;

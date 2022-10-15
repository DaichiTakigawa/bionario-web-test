import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  type Viewport,
  type Connection,
  type EdgeChange,
  type NodeChange,
} from 'reactflow';
import type { SimulationNodeType } from '../../models';
import { addNodeReducer, hoverEdgeReducer } from './reducers';
import type { State } from './state';

const name = 'reactFlow';

const initialState: State = {
  viewport: {
    x: 0,
    y: 0,
    zoom: 1,
  },
  nodes: [],
  edges: [],
};

export const reactFlowSlice = createSlice({
  name,
  initialState,
  reducers: {
    addNode: (
      state: State,
      action: PayloadAction<{ nodeType: SimulationNodeType }>
    ) => {
      addNodeReducer(state, action.payload.nodeType);
    },
    setIsExpand: (
      state: State,
      action: PayloadAction<{ nodeId: string; isExpand: boolean }>
    ) => {
      for (const node of state.nodes) {
        if (node.id === action.payload.nodeId) {
          node.data.isExpand = action.payload.isExpand;
          break;
        }
      }
    },
    handleNodesChange: (
      state: State,
      action: PayloadAction<{ changes: NodeChange[] }>
    ) => {
      state.nodes = applyNodeChanges(action.payload.changes, state.nodes);
    },
    handleEdgesChange: (
      state: State,
      action: PayloadAction<{ changes: EdgeChange[] }>
    ) => {
      state.edges = applyEdgeChanges(action.payload.changes, state.edges);
      state.edges.forEach((e) => {
        e.type = 'defaultEdge';
      });
    },
    handleConnectionChange: (
      state: State,
      action: PayloadAction<{ connection: Connection }>
    ) => {
      state.edges = addEdge(action.payload.connection, state.edges);
    },
    handleMove: (
      state: State,
      action: PayloadAction<{ viewport: Viewport }>
    ) => {
      state.viewport = action.payload.viewport;
    },
    handleEdgeHover: (
      state: State,
      action: PayloadAction<{ edgeId: string; hover: boolean }>
    ) => {
      hoverEdgeReducer(state, action.payload.edgeId, action.payload.hover);
    },
  },
});

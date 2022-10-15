import type { Edge, Node, Viewport } from 'reactflow';

export type InputParameterNodeData = {
  type: 'inputParameter';
  id: string;
  name: string;
  unit: string;
  value?: number;
  isExpand: boolean;
};

export type VariableNodeData = {
  type: 'variable';
  id: string;
  name: string;
  unit: string;
  value?: number;
  definition?: string;
  inputNodeNames: string[];
  isExpand: boolean;
};

export type TimeInputParameterNodeData = {
  type: 'timeInputParameter';
  id: string;
  name: string;
  unit: string;
  values?: number[];
  isExpand: boolean;
};

export type TimeVariableNodeData = {
  type: 'timeVariable';
  id: string;
  name: string;
  unit: string;
  totalAmount?: number;
  initialValue?: number;
  values?: number[];
  definition?: string;
  inputNodeNames: string[];
  isExpand: boolean;
};

export type SimulationNodeData =
  | InputParameterNodeData
  | VariableNodeData
  | TimeInputParameterNodeData
  | TimeVariableNodeData;

export type SimulationNodeType = SimulationNodeData['type'];

export type SimulationNode = Node<SimulationNodeData>;

export type SimulationEdgeData = {
  isMouseHover: boolean;
};

export type SimulationEdge = Edge<SimulationEdgeData>;

export type SimulationEditorData = {
  viewport: Viewport;
  nodes: SimulationNode[];
  edges: SimulationEdge[];
};

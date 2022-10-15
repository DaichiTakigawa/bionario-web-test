import type {
  InputParameterNodeData,
  SimulationNodeType,
  TimeInputParameterNodeData,
  TimeVariableNodeData,
  VariableNodeData,
} from '../../models';
import { type State } from './state';

export const totalHourInYear = 8760;

function getNextId(state: State) {
  return state.nodes.reduce((prev, v) => Math.max(prev, Number(v.id)), 0) + 1;
}

function addInputParameterNode(state: State) {
  const nextId = getNextId(state);
  const data: InputParameterNodeData = {
    type: 'inputParameter',
    id: `${nextId}`,
    name: 'hogehoge',
    unit: 'kW',
    value: Math.random(),
    isExpand: false,
  };

  state.nodes.push({
    id: `${nextId}`,
    type: 'inputParameterNode',
    position: { x: 0, y: 0 },
    data: data,
  });
}

function addTimeInputParameterNode(state: State) {
  const nextId = getNextId(state);
  const data: TimeInputParameterNodeData = {
    type: 'timeInputParameter',
    id: `${nextId}`,
    name: 'fugafuga',
    unit: 'kWh',
    isExpand: false,
    values: Array.from(Array(totalHourInYear)).map((_, i) => i),
  };
  state.nodes.push({
    id: `${nextId}`,
    type: 'timeInputParameterNode',
    position: { x: 0, y: 0 },
    data: data,
  });
}

function addVariableNode(state: State) {
  const nextId = getNextId(state);
  const data: VariableNodeData = {
    type: 'variable',
    id: `${nextId}`,
    name: 'hogefuga',
    unit: 'kWh',
    isExpand: false,
    value: 200,
    definition: 'if hoge > fuga:\n\tfuga',
    inputNodeNames: ['hoge', 'fuga'],
  };

  state.nodes.push({
    id: `${nextId}`,
    type: 'variableNode',
    position: { x: 0, y: 0 },
    data: data,
  });
}

function addTimeVariable(state: State) {
  const nextId = getNextId(state);
  const data: TimeVariableNodeData = {
    type: 'timeVariable',
    id: `${nextId}`,
    name: 'fugahoge',
    unit: 'kWh',
    isExpand: false,
    totalAmount: 1000,
    initialValue: 0,
    values: Array.from(Array(totalHourInYear)).map((_, i) => i),
    definition: 'if fuga > hoge:\n\tfuga',
    inputNodeNames: ['hoge', 'huga'],
  };

  state.nodes.push({
    id: `${nextId}`,
    type: 'timeVariableNode',
    position: { x: 0, y: 0 },
    data: data,
  });
}

export function addNodeReducer(state: State, nodeType: SimulationNodeType) {
  switch (nodeType) {
    case 'inputParameter':
      addInputParameterNode(state);
      break;
    case 'timeInputParameter':
      addTimeInputParameterNode(state);
      break;
    case 'variable':
      addVariableNode(state);
      break;
    case 'timeVariable':
      addTimeVariable(state);
      break;
  }
}

export function hoverEdgeReducer(state: State, edgeId: string, hover: boolean) {
  state.edges.forEach((e) => {
    if (e.id === edgeId) {
      e.data = { ...e.data, isMouseHover: hover };
    }
  });
}

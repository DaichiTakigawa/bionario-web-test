import type { Viewport } from 'reactflow';
import type { SimulationEdge, SimulationNode } from '../../models';

export type State = {
  viewport: Viewport;
  nodes: SimulationNode[];
  edges: SimulationEdge[];
};

import { createSelector } from '@reduxjs/toolkit';
import { type AppState } from '../../store';

function getReactFlowNodesDepends(state: AppState) {
  return state.reactFlow.nodes;
}

export const selectReactFlowNodes = createSelector(
  [getReactFlowNodesDepends],
  (nodes) => {
    return nodes;
  }
);

function getReactFlowEdgeDepends(state: AppState) {
  return state.reactFlow.edges;
}

export const selectReactFlowEdges = createSelector(
  [getReactFlowEdgeDepends],
  (edges) => {
    return edges;
  }
);

import BaseNode from './BaseNode';

export const MathNode = ({ id }) => (
  <BaseNode
    title="Math"
    inputs={[{ id: `${id}-a` }, { id: `${id}-b` }]}
    outputs={[{ id: `${id}-sum` }]}
  >
    <div>Performs addition of two inputs.</div>
  </BaseNode>
);

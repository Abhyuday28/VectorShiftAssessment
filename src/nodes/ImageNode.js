import BaseNode from './BaseNode';

export const ImageNode = ({ id }) => (
  <BaseNode
    title="Image"
    inputs={[]}
    outputs={[{ id: `${id}-image` }]}
  >
    <div>Processes or displays images.</div>
  </BaseNode>
);

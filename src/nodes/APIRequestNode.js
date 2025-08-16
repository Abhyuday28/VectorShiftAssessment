import BaseNode from './BaseNode';

export const APIRequestNode = ({ id }) => (
  <BaseNode
    title="API Request"
    inputs={[{ id: `${id}-url` }]}
    outputs={[{ id: `${id}-response` }]}
  >
    <div>Makes a request to an API endpoint.</div>
  </BaseNode>
);

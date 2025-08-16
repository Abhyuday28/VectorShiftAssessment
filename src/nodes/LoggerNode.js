import BaseNode from './BaseNode';

export const LoggerNode = ({ id }) => (
  <BaseNode
    title="Logger"
    inputs={[{ id: `${id}-message` }]}
    outputs={[]}
  >
    <div>Logs the message to console/output.</div>
  </BaseNode>
);

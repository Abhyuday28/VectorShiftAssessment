// toolbar.js
import { FaKeyboard} from "react-icons/fa";

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '14px', border: '1px solid #1a1a2e', borderRadius:'6px', width:'fit-content'}}>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />

                <DraggableNode type='math' label='Math' />
                <DraggableNode type='image' label='Image' />
                <DraggableNode type='apiRequest' label='API Request' />
                <DraggableNode type='condition' label='Condition' />
                <DraggableNode type='logger' label='Logger' />
            </div>
        </div>
    );
};

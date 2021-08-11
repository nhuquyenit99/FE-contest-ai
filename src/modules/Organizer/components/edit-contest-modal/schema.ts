import Ajv from 'ajv';
import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';

const schema = {
    title: 'Edit Contest',
    type: 'object',
    properties: {
        title: { 
            type: 'string',
            label: 'Contest Name',
            placeholder: 'Contest Name',
        },
        time_start: {
            type: 'string', 
            format: 'date-time',
            label: 'Time Start',
            placeholder: 'Time Start',
            showTime: true
        },
        time_end: { 
            type: 'string', 
            format: 'date-time', 
            label: 'Time End',
            placeholder: 'Time End',
        },
        description: {
            type: 'string' 
        },
    },
    required: ['title', 'time_start', 'time_end', 'description'],
};

const ajv = new Ajv({ allErrors: true, useDefaults: true });

function createValidator(schema: object) {
    const validator = ajv.compile(schema);

    return (model: object) => {
        validator(model);
        return validator.errors?.length ? { details: validator.errors } : null;
    };
}

const schemaValidator = createValidator(schema);

export const bridge = new JSONSchemaBridge(schema, schemaValidator);
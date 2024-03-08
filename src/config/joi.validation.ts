import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
    MONGO_DB_URI: Joi.required().messages({
        'any.required': 'MONGO_DB_URI is a required environment variable',
    }),
    defaultLimit: Joi.number().default(7),
});

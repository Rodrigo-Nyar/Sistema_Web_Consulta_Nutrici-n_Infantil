/**
	Generated by sails-inverse-model
	Date:Sun Oct 27 2019 18:40:45 GMT-0400 (-04)
*/

module.exports = {
    attributes: {
        id: {
            type: "number",
            columnType: "int",
            isInteger: true,
            required: true
        },
        createdAt: {
            type: "number",
            columnType: "bigint",
            isInteger: true
        },
        fromModel: {
            type: "string",
            columnType: "varchar",
            maxLength: 255
        },
        originalRecord: {
            type: "string",
            columnType: "longtext"
        },
        originalRecordId: {
            type: "string",
            columnType: "longtext"
        }
    }
};
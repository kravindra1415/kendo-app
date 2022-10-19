"use strict";
exports.__esModule = true;
var kendo_data_query_1 = require("@progress/kendo-data-query");
var data = [
    { name: "pork", category: "Food", subcategory: "Meat" },
    { name: "pepper", category: "Food", subcategory: "Vagetables" },
    { name: "Beef", category: "Food", subcategory: "Meat" },
];
var result = (0, kendo_data_query_1.filterBy)(data, {
    logic: 'and',
    filters: [{
            field: "name", operator: "startswith", value: "p"
        },
        { field: "subcategory", operator: "eq", value: "Meat" },
    ]
});
console.log(JSON.stringify(result, null, 2));

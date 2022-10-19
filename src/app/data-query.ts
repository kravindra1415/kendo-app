import { filterBy } from '@progress/kendo-data-query';

const data = [
    { name: "pork", category: "Food", subcategory: "Meat" },
    { name: "pepper", category: "Food", subcategory: "Vagetables" },
    { name: "Beef", category: "Food", subcategory: "Meat" },
]

const result = filterBy(data, {
    logic: 'and',
    filters: [{
        field: "name", operator: "startswith", value: "p"
    },
    { field: "subcategory", operator: "eq", value: "Meat" },
    ]
});

console.log(JSON.stringify(result, null, 2));
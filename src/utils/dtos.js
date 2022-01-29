export const buildCardDTO = (createdCardValues) => ({
  projectId: createdCardValues.projectId,
  columnId: createdCardValues.columnId,
  name: createdCardValues.name,
  order: createdCardValues.order,
  description: createdCardValues.description
});

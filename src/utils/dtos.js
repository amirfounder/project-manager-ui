export const buildCardDTO = (createdCardValues) => ({
  project_id: createdCardValues.projectId,
  column_id: createdCardValues.columnId,
  name: createdCardValues.name,
  order: createdCardValues.order,
  description: createdCardValues.description
});

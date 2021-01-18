export const filterFormFields = form => ({
  ...form,
  fields: form.fields.filter(field => field.fillable_by_user !== false)
});

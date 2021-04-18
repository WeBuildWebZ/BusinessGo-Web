export const filterFields = (form, step, variant) =>
  !form
    ? null
    : form.fields
        .filter(field => field.step === step + 1)
        .filter(field => !variant || field.show_on_variants.includes(variant));

export const VALIDATION_RULES = {
  email: { required: true, minLength: 5, maxLength: 255 },
  password: { required: true, minLength: 8 },
  username: { required: true, minLength: 3, maxLength: 20 }
};

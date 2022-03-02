module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c8c2b45405fc50ec261b87ed7eb55c11'),
  },
});

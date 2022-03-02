module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e6a0c95265113dd168c3b288707e6214'),
  },
});

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'aed310f8cc1600536c5347e5b2ff1b39'),
  },
});

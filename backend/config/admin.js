module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '635c01ff9d7f5d54b6a87e5f227abe34'),
  },
});
